
/* ============================================================
   CHAPTER 2 ENGINE: PROJECT ATLAS
   Uses the existing Centrist Simulator page and controls.
   ============================================================ */

(function () {
  var M = CHAPTER2_MAP;
  var C = CHAPTER2_CONTENT;
  var c2 = null;

  /* Atlas visual styling. These colours are taken from the
     original Project Atlas HTML. */

  var style = document.createElement("style");
  style.textContent = `
    html.ch2, html.ch2 body {
      background: #f4f1ea;
      color: #1d1d1b;
      font-family: "Fira Mono", Consolas, Menlo, "Courier New", monospace;
    }

    html.ch2 {
      --bg: #f4f1ea;
      --fg: #1d1d1b;
      --dim: #7d776a;
      --hi: #b3261e;
      --npc: #1a5fb4;
      --door: #8a5a00;
      --panel: #e8e4d8;
    }

    html.ch2 main { max-width: 1200px; }

    html.ch2 pre {
      font-size: 15px;
      line-height: 1.12;
    }

    html.ch2 #timer {
      font-size: 36px;
      color: #b3261e;
      letter-spacing: 2px;
    }

    html.ch2 #hud { color: #7d776a; }

    html.ch2 #log {
      background: #e8e4d8;
      color: #1d1d1b;
      font-size: 14px;
      line-height: 1.5;
    }

    html.ch2 #log .npc {
      background: transparent;
      color: #1d1d1b;
      border: 1px solid #8a5a00;
      padding: 6px 10px;
    }

    html.ch2 #log .who {
      color: #8a5a00;
      font-size: 12px;
    }

    html.ch2 #log .al {
      color: #b3261e;
      font-weight: bold;
    }

    html.ch2 #log .dim { color: #7d776a; }

    html.ch2 #opts button {
      color: #8a5a00;
      border-color: #8a5a00;
    }

    html.ch2 #pad button,
    html.ch2 #restart {
      color: #1d1d1b;
      border-color: #7d776a;
    }

    html.ch2 .help { color: #7d776a; }

    @media(max-width:760px) {
      html.ch2 pre { font-size: 11px; }
    }
  `;
  document.head.appendChild(style);

  function floorName() {
    if (c2.player.y < 9) return "FLOOR 3: EXECUTIVE";
    if (c2.player.y < 19) return "FLOOR 2: TECH";
    return "FLOOR 1: LOBBY & CAFE";
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function getTile(x, y) {
    return M.tiles[c2.grid[y][x]];
  }

  function npcAt(x, y) {
    return c2.npcs.find(function (n) {
      return n.x === x && n.y === y;
    });
  }

  function hud() {
    if (!c2) return;

    var left = Math.max(
      0,
      C.seconds - (Date.now() - c2.startedAt) / 1000
    );

    var m = Math.floor(left / 60);
    var s = Math.ceil(left % 60);

    if (s === 60) {
      m++;
      s = 0;
    }

    timerEl.textContent =
      (m < 10 ? "0" : "") + m + ":" +
      (s < 10 ? "0" : "") + s;

    hudEl.textContent =
      "STAFF " + c2.staff + "/50" +
      "   HAPPINESS " + c2.happiness + "/100" +
      "   PROGRESS " + c2.progress + "/80%" +
      "   MET " + c2.npcs.filter(function (n) {
        return n.done;
      }).length + "/" + c2.npcs.length +
      "\n" + floorName();
  }

  function draw() {
    var out = "";

    for (var y = 0; y < M.height; y++) {
      var cells = [];

      for (var x = 0; x < M.width; x++) {
        var t = M.tiles[c2.grid[y][x]];
        cells[x] = {
          ch: t.ch,
          fg: t.fg,
          bg: t.bg,
          bold: t.bold
        };
      }

      /* Room labels */

      M.labels.forEach(function (l) {
        if (l[1] !== y) return;

        for (var k = 0; k < l[2].length; k++) {
          cells[l[0] + k] = {
            ch: l[2][k],
            fg: "#e8c07d",
            bg: "#1b1612",
            bold: true
          };
        }
      });

      /* Characters */

      c2.npcs.forEach(function (n) {
        if (n.y !== y) return;

        cells[n.x] = n.done
          ? { ch: n.glyph, fg: "#7d7a95", bg: "#d9d6f0", bold: true }
          : { ch: n.glyph, fg: "#ffffff", bg: "#1a5fb4", bold: true };
      });

      /* Player */

      if (c2.player.y === y) {
        cells[c2.player.x] = {
          ch: "@",
          fg: "#000000",
          bg: "#ffd866",
          bold: true
        };
      }

      var run = "";
      var current = null;

      cells.forEach(function (cell) {
        var key = cell.fg + "|" + cell.bg + "|" + cell.bold;

        if (key !== current) {
          if (current !== null) out += run + "</span>";

          current = key;
          run =
            '<span style="color:' + cell.fg +
            ';background:' + cell.bg +
            (cell.bold ? ';font-weight:bold' : '') + '">';
        }

        run += esc(cell.ch);
      });

      out += run + "</span>\n";
    }

    mapEl.innerHTML = out;
  }

  function describeTile(tile) {
    if (!tile.desc) return;

    var d = tile.desc;

    if (Array.isArray(d)) {
      var key = c2.player.x + "," + c2.player.y;
      var i = c2.bumps[key] || 0;
      c2.bumps[key] = i + 1;
      say(d[i % d.length]);
    } else {
      say(d);
    }
  }

  function move(dx, dy) {
    if (!c2 || c2.ended || c2.convo) return;

    var nx = c2.player.x + dx;
    var ny = c2.player.y + dy;

    if (nx < 0 || ny < 0 || nx >= M.width || ny >= M.height) return;

    var n = npcAt(nx, ny);

    if (n) {
      talk(n);
      return;
    }

    var tile = getTile(nx, ny);

    if (tile.solid) {
      if (tile.desc) describeTile(tile);
      return;
    }

    c2.player.x = nx;
    c2.player.y = ny;

    if (tile.step) say(tile.step);

    hud();
    draw();
  }

  function talk(n) {
    if (n.done) {
      say("You have already spoken to " + n.name + ".");
      return;
    }

    c2.convo = { npc: n, stage: "q" };

    clearLog();

    var d = document.createElement("div");
    d.className = "npc";

    var who = document.createElement("div");
    who.className = "who";
    who.textContent = n.name;

    var prompt = document.createElement("div");
    prompt.textContent = "“" + n.prompt + "”";

    d.appendChild(who);
    d.appendChild(prompt);
    logEl.appendChild(d);

    showOptions(
      n.options.map(function (o, i) {
        return "[" + (i + 1) + "] " + o.say;
      }),
      pick
    );
  }

  function pick(i) {
    if (!c2 || !c2.convo) return;

    var convo = c2.convo;

    if (convo.stage === "q") {
      var o = convo.npc.options[i];
      if (!o) return;

      add("You: “" + o.say + "”", "dim");
      add(convo.npc.name.replace(/^The /, "") + ": “" + o.reply + "”", "npc");
      add("SYSTEM ALERT: " + o.alert, "al");

      c2.staff = clamp(c2.staff + o.fx.staff, 0, 50);
      c2.happiness = clamp(c2.happiness + o.fx.happiness, 0, 100);
      c2.progress = clamp(c2.progress + o.fx.progress, 0, 80);

      convo.stage = "next";

      showOptions(["[1] Continue"], pick);
      hud();
    } else {
      convo.npc.done = true;
      c2.convo = null;

      clearOpts();
      add("(The conversation ends.)", "dim");

      hud();
      draw();

      if (c2.npcs.every(function (n) { return n.done; })) {
        finish(true);
      }
    }
  }

  function finish(success) {
    if (!c2 || c2.ended) return;

    c2.ended = true;
    c2.convo = null;

    clearOpts();
    clearLog();

    add(success ? "ALL STAKEHOLDERS ENGAGED" : "TIME'S UP", "al");

    add(
      "Staff " + c2.staff + "/50, Happiness " +
      c2.happiness + "/100, Progress " +
      c2.progress + "/80%"
    );

    var verdict =
      c2.progress >= 60 && c2.happiness < 40
        ? "Delivered on time. Nobody will say how."
        : c2.happiness >= 70
        ? "Happy staff and a sensible plan. Leadership describes this as ‘a concern’."
        : c2.progress < 25
        ? "Little achieved. Leadership calls you ‘measured’."
        : "Somewhere in the middle. Promotion pending review.";

    add(verdict);

    showOptions(["[R] Play again"], function () {
      location.reload();
    });

    hud();
  }

  function start() {
    if (!M || !C) {
      say("Chapter 2 files have not loaded.");
      return;
    }

    mode = "ch2";
    document.documentElement.classList.remove("ch1");
    document.documentElement.classList.add("ch2");

    titleEl.textContent = C.title;

    c2 = {
      grid: M.rows.map(function (r) { return Array.from(r); }),
      player: { x: M.start.x, y: M.start.y },
      npcs: C.people.map(function (n) {
        return Object.assign({}, n, { done: false });
      }),
      staff: 30,
      happiness: 50,
      progress: 0,
      convo: null,
      ended: false,
      bumps: {},
      startedAt: Date.now()
    };

    clearOpts();
    clearLog();

    say("You arrive in the lobby of Project Atlas. Six people need your attention. Stairs are in the middle of the building.");

    hud();
    draw();
  }

  /* Chapter 1 completion now offers a route into Chapter 2. */

  endChapter = function (success) {
    if (!ch) return;

    ch.ended = true;
    ch.convo = null;
    ch.popupQueue = [];
    ch.popupOpen = false;
    popupEl.hidden = true;

    clearOpts();
    clearLog();

    add(success ? "CHAPTER 1 COMPLETE" : "TIME'S UP", "al");
    add("Voters met: " + metCount("voter") + "/" + totalCount("voter"));
    add("Donors met: " + metCount("donor") + "/" + totalCount("donor"));
    add("Funds raised: £" + ch.funds.toLocaleString("en-GB"));
    add("Answers given: " + ch.tally.meaningful + " meaningful, " +
      ch.tally.platitude + " platitude, " +
      ch.tally.promiseEverything + " promise-everything");

    if (success) {
      add("Your next assignment awaits at Project Atlas.");
      showOptions(["[1] Continue to Chapter 2"], start);
    } else {
      add("(Press R to start again.)", "dim");
      showOptions(["[R] Play again"], function () {
        location.reload();
      });
    }

    updateHud();
  };

  /* Route existing movement controls to the new map. */

  var oldStep = step;

  step = function (dx, dy) {
    if (mode === "ch2") {
      move(dx, dy);
    } else {
      oldStep(dx, dy);
    }
  };

  /* Chapter 2 keyboard dialogue controls. */

  document.addEventListener("keydown", function (e) {
    if (mode !== "ch2" || !c2) return;

    var k = e.key.toLowerCase();

    if (c2.ended) {
      if (k === "r") location.reload();
      return;
    }

    if (c2.convo) {
      if (k === "1") pick(0);
      else if (k === "2" && c2.convo.stage === "q") pick(1);
      else if ((k === "enter" || k === " ") && c2.convo.stage === "next") {
        e.preventDefault();
        pick(0);
      }
    }
  });

  /* Chapter 2 timer. */

  setInterval(function () {
    if (mode !== "ch2" || !c2 || c2.ended) return;

    if (Date.now() - c2.startedAt >= C.seconds * 1000) {
      finish(false);
      return;
    }

    hud();
  }, 250);

})();
