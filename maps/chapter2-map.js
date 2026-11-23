
/* CHAPTER 2: PROJECT ATLAS MAP */

var CHAPTER2_MAP = (function () {
  var W = 60, H = 29;
  var g = [];

  for (var y = 0; y < H; y++) {
    g.push([]);
    for (var x = 0; x < W; x++) g[y].push(".");
  }

  function fill(x1, y1, x2, y2, c) {
    for (var j = y1; j <= y2; j++)
      for (var i = x1; i <= x2; i++)
        g[j][i] = c;
  }

  function put(x, y, c) {
    g[y][x] = c;
  }

  fill(0, 0, 59, 0, "#");
  fill(0, 28, 59, 28, "#");
  fill(0, 0, 0, 28, "#");
  fill(59, 0, 59, 28, "#");

  fill(0, 9, 59, 9, "#");
  fill(0, 19, 59, 19, "#");

  fill(41, 9, 43, 9, "^");
  fill(41, 19, 43, 19, "^");
  fill(24, 28, 26, 28, "D");

  /* FLOOR 3: EXECUTIVE */

  fill(19, 1, 19, 8, "#");
  fill(19, 6, 19, 7, "+");
  fill(38, 1, 38, 8, "#");
  fill(38, 6, 38, 7, "+");

  put(1, 1, "♣");
  put(18, 1, "♣");
  put(1, 8, "♣");
  put(18, 8, "♣");

  fill(5, 4, 14, 5, "=");
  fill(6, 3, 13, 3, "o");
  fill(6, 6, 13, 6, "o");

  put(20, 1, "♣");
  put(37, 1, "♣");
  put(20, 8, "♣");
  put(37, 8, "♣");

  fill(25, 3, 32, 3, "≡");
  put(28, 4, "o");

  fill(42, 2, 55, 2, "▒");

  for (var x = 41; x <= 56; x += 3) put(x, 4, "o");

  put(39, 1, "♣");
  put(58, 1, "♣");
  put(39, 8, "♣");
  put(58, 8, "♣");

  /* FLOOR 2: TECH */

  fill(45, 10, 45, 18, "#");
  fill(45, 11, 45, 12, "+");
  fill(45, 16, 45, 17, "+");
  fill(46, 13, 58, 13, "#");

  [11, 15].forEach(function (r) {
    [3, 7, 11, 22, 26, 30].forEach(function (c) {
      put(c, r, "≡");
      put(c + 1, r, "≡");
      put(c, r + 1, "o");
    });
  });

  fill(46, 10, 58, 10, "▦");
  fill(47, 16, 50, 16, "▬");
  fill(54, 16, 57, 16, "▬");

  /* FLOOR 1: LOBBY AND CAFE */

  fill(37, 20, 37, 27, "#");
  fill(37, 23, 37, 24, "+");

  fill(2, 20, 9, 20, "▬");
  fill(23, 20, 31, 20, "▬");
  fill(2, 26, 9, 26, "▬");
  fill(17, 22, 29, 22, "▒");

  put(1, 27, "♣");
  put(35, 27, "♣");

  fill(45, 20, 56, 20, "▒");
  put(54, 20, "C");

  [41, 46, 51, 55].forEach(function (c) {
    put(c, 25, "O");
    put(c - 1, 25, "o");
    put(c + 1, 25, "o");
  });

  return {
    width: W,
    height: H,
    rows: g.map(function (r) { return r.join(""); }),

    start: { x: 25, y: 27 },

    labels: [
      [2, 0, " FLOOR 3: EXECUTIVE "],
      [2, 9, " FLOOR 2: TECH "],
      [2, 19, " FLOOR 1: LOBBY & CAFE "],
      [5, 2, "BOARDROOM"],
      [23, 6, "CEO'S OFFICE"],
      [45, 6, "RECEPTION"],
      [47, 11, "SERVER ROOM"],
      [49, 14, "HUDDLE"],
      [22, 25, "LOBBY"],
      [46, 23, "CAFE"]
    ],

    floorColour: "#d9d6f0",

    tiles: {
      "#": {
        ch: "█", fg: "#e8604c", bg: "#e8604c", solid: true
      },
      ".": {
        ch: ".", fg: "#b9b4da", bg: "#d9d6f0"
      },
      "+": {
        ch: "+", fg: "#2a2438", bg: "#d9d6f0", bold: true
      },
      "D": {
        ch: "+", fg: "#2a2438", bg: "#e8604c",
        bold: true, solid: true,
        desc: "The front doors. The building has your badge now. You are not leaving."
      },
      "^": {
        ch: "^", fg: "#2a2438", bg: "#ffd866",
        bold: true,
        step: "You take the stairs. The lift has been temporarily out of order since March."
      },
      "o": {
        ch: "o", fg: "#8a7fc0", bg: "#d9d6f0"
      },
      "≡": {
        ch: "≡", fg: "#d4452f", bg: "#d9d6f0",
        bold: true, solid: true,
        desc: [
          "Desk: A hot desk nobody is allowed to personalise.",
          "Desk: The monitor shows 4,000 unread emails and a stock photo of a sunset."
        ]
      },
      "=": {
        ch: "▓", fg: "#d4452f", bg: "#d9d6f0",
        solid: true,
        desc: "Boardroom table: Seats twelve. Has never reached a decision."
      },
      "▒": {
        ch: "▒", fg: "#d4452f", bg: "#d9d6f0",
        solid: true,
        desc: "Counter: Laminate. Somewhere behind it a visitor pass is being printed."
      },
      "▬": {
        ch: "▬", fg: "#d4452f", bg: "#d9d6f0",
        solid: true,
        desc: "Sofa: Built to be sat on for forty minutes and remembered by no one."
      },
      "♣": {
        ch: "♣", fg: "#2f7d32", bg: "#d9d6f0",
        bold: true, solid: true,
        desc: "Plant: A fern on a facilities contract. It is thriving more than the staff."
      },
      "▦": {
        ch: "▦", fg: "#4a3f7a", bg: "#d9d6f0",
        solid: true,
        desc: "Server rack: Blinking lights. It has been a bit flaky since 2019."
      },
      "C": {
        ch: "C", fg: "#2a2438", bg: "#d9d6f0",
        bold: true, solid: true,
        desc: "Coffee machine: Out of order. A laminated note blames the previous note."
      },
      "O": {
        ch: "O", fg: "#d4452f", bg: "#d9d6f0",
        solid: true,
        desc: "Cafe table: A tiny round table for a meeting that should have been an email."
      }
    }
  };
})();
