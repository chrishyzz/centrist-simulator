// CHAPTER 1: ELECTION - the park and the fundraising dinner.
//
// How to read this file
//   x = column (0 is the far left), y = row (0 is the top).  A tile is rows[y][x].
//   "rows" is the map exactly as you drew it.  A quote mark inside a row is
//   written \"  - that backslash is just how JavaScript spells a quote. Ignore it.
//   "@" is where the player starts and each "v" is a voter. The game lifts
//   these out of the grid when the level loads (the ground under them is walkable).
//   Anything NOT listed in "legend" is walkable scenery (grass, path, road,
//   carpet, floor, and the lettering like HIGH STREET and VIP ONLY).
//   "desc" names a text in your MAP TILE DESCRIPTIONS file.
//   "colorRows" is only the colours (one character per tile, an index into
//   "palette"). It keeps your map looking the way you drew it.

var CHAPTER1_MAP = {
  name: "Chapter 1: The Park",
  width: 66,
  height: 25,
  start: { x: 2, y: 6 },

  rows: [
    "╔════════════════════════════════════════════════════════════════╗",
    "║   HIGH STREET                                   HIGH STREET    ║",
    "║   --  --  --  --  --  --  --  --  --          --  --  --  --   ║",
    "║                                                                ║",
    "║───────────────────────────────────────┐   ┌────────────────────║",
    "║`   .[ THE PARK ]   .* ♣`  \"\",, \"&  ♣ #│   │      .   . .  .    ║",
    "║ @░░░░░░░░░░░  \".♣ , v `&\"     ♣   ' '#│ | │..♣....          ♣  ║",
    "║'.  *    ` ░░i =''     *         . v  #│   │ . .      ..    .   ║",
    "║,   v' . v ░░ ♣   ` \" .  `   '\"   `  ,#│ | │.  ╔══════════════╗ ║",
    "║ &. `\"    *░░  \"   . ,,          '    #│   │   ║  .        ...║ ║",
    "║  *'      `░░ `'   `    . \"i   ` \"  , #│ | │   ║ FUNDRAISING .║.║",
    "║ ,♣      ♣ ░░░░░░░░░░░░░░░░           #│   │. .▒..  DINNER    ▒ ║",
    "║      ,v   \" ,  . *  =   ░░           #│ | │ ..▒.   .      ...▒♣║",
    "║ ,, &  ,*  .  &♣v`,,'  `,░░\"` ' ' \"♣  #│   │ v ║.. VIP ONLY   ║ ║",
    "║.   \"     .   , '    ♣,\" ░░,\" .      .║│   │   ║     .   . . .▒.║",
    "║  v '♣ .  &*`   , ,.   * ░░,  = '\"  i   ===   o║ (o)  (o) .(o)▒ ║",
    "║`  *  \"\"\"\"\"\"\"..`& ,\"  '  ░░░░░░░░░░░░░░     ▓▓▓+   ...  .     ║ ║",
    "║ ♣.\"\"\"~≈~≈~≈~\"\"\"*\"    `     \". ,*   i   ===   o║.   .   .  .. ║ ║",
    "║v \"~≈~≈~≈~≈~≈~≈~\" . ,  *' .`\"      '*`║│   │v  ║  .  .   .    ║♣║",
    "║ \"~≈~≈~≈~≈~≈~≈~≈~\"\"   v    ' , '  `  ,#│   │ . ▒ (o)  (o). (o)║ ║",
    "║\" \"~≈~≈~≈~≈~≈~≈~\"  &`   ,`,♣  .`  *  .#│ | │.  ▒     .        ║.║",
    "║  ,\"\"\"~≈~≈~≈~\"\"\" `,  ,     \"   , '    #│   │ v.╚══════════════╝ ║",
    "║ ..&\" \"\"\"\"\"\"\"  &.`    *  \" ,   ,      #│ | │  ♣ .    .   .   ♣  ║",
    "║ .  '`       .  '      ♣\"'   '♣  `   `#│   │ .      .     .  . .║",
    "╚════════════════════════════════════════════════════════════════╝"
  ],

  // What each solid or interactive symbol is.
  tiles: {
    wall:        { solid: true },
    kerb:        { solid: true },
    hedge:       { solid: true, desc: "plants" },
    shrub:       { solid: true, desc: "plants" },
    flowers:     { solid: true, desc: "plants" },
    tree:        { solid: true, desc: "trees" },
    pond:        { solid: true, desc: "pond" },
    bench:       { solid: true },
    lamppost:    { solid: true },
    post:        { solid: true },
    window:      { solid: true },
    canapeTable: { solid: true, desc: "canapeTable" },
    door:        { solid: false, interact: "door" },
    crossing:    { solid: false }
  },

  // Which symbol means which tile.
  legend: {
    "#": "hedge", "&": "shrub", "*": "flowers", "\u2663": "tree",
    "~": "pond", "\u2248": "pond", "=": "bench", "i": "lamppost",
    "(": "canapeTable", "o": "canapeTable", ")": "canapeTable",
    "\u2592": "window", "+": "door",
    "\u2551": "wall", "\u2550": "wall", "\u2554": "wall", "\u2557": "wall", "\u255a": "wall", "\u255d": "wall",
    "\u2502": "kerb", "\u2500": "kerb", "\u250c": "kerb", "\u2510": "kerb"
  },

  // A few tiles share a symbol with something else, so they are set by position.
  // The zebra crossing "===" is walkable (but a park bench "=" is not),
  // and the "o" posts either side of the red carpet are not canape tables.
  overrides: {
    "41,15": "crossing", "42,15": "crossing", "43,15": "crossing",
    "41,17": "crossing", "42,17": "crossing", "43,17": "crossing",
    "47,15": "post", "47,17": "post"
  },

  // Colours: [text colour, background colour, bold?]
  palette: [
    ["#6b6b73", "#1b1d1b", 0],
    ["#cccccc", "#2b2b2e", 0],
    ["#7a7a84", "#2b2b2e", 0],
    ["#d9b84a", "#2b2b2e", 0],
    ["#8a8a92", "#232323", 0],
    ["#27553a", "#14201a", 0],
    ["#cccccc", "#14201a", 0],
    ["#3d8b4a", "#14201a", 0],
    ["#e8e0c8", "#14201a", 1],
    ["#2f6b3a", "#14201a", 0],
    ["#feca57", "#14201a", 1],
    ["#3fbf5a", "#14201a", 1],
    ["#4a9a55", "#14201a", 0],
    ["#2e8b4a", "#14201a", 0],
    ["#4cd36a", "#14201a", 1],
    ["#2f7d32", "#14201a", 0],
    ["#8a8a92", "#2b2b2e", 0],
    ["#cccccc", "#232323", 0],
    ["#3a3a3a", "#232323", 0],
    ["#000000", "#ffd866", 1],
    ["#8c7b55", "#241f16", 0],
    ["#35a84f", "#14201a", 1],
    ["#54a0ff", "#14201a", 1],
    ["#3a9d58", "#14201a", 0],
    ["#3fbf5a", "#232323", 1],
    ["#ff9ff3", "#14201a", 1],
    ["#ffd866", "#14201a", 1],
    ["#b07a3c", "#14201a", 1],
    ["#ffffff", "#14201a", 1],
    ["#ff6b81", "#14201a", 1],
    ["#1dd1a1", "#14201a", 1],
    ["#c98a4b", "#232323", 0],
    ["#3a8f3e", "#14201a", 0],
    ["#3a3a3a", "#2a1f16", 0],
    ["#cccccc", "#2a1f16", 0],
    ["#4a3a2a", "#2a1f16", 0],
    ["#256b2a", "#14201a", 0],
    ["#ffd866", "#2a1f16", 1],
    ["#6fb7e0", "#232323", 0],
    ["#c56cf0", "#14201a", 1],
    ["#ff6b81", "#232323", 1],
    ["#ff6b81", "#2a1f16", 1],
    ["#c9b48a", "#14201a", 0],
    ["#cccccc", "#1b1d1b", 0],
    ["#e6e6e6", "#2b2b2e", 0],
    ["#ffd866", "#232323", 1],
    ["#e8c07d", "#2a1f16", 1],
    ["#3f8f8a", "#14201a", 0],
    ["#a3262a", "#232323", 0],
    ["#2f7fb8", "#0f2a40", 0],
    ["#4aa3df", "#0f2a40", 0],
    ["#ff9f43", "#232323", 1],
    ["#1dd1a1", "#232323", 1]
  ],
  colorRows: [
    "000000000000000000000000000000000000000000000000000000000000000000",
    "011122222222222111111111111111111111111111111111112222222222211110",
    "011133113311331133113311331133113311331111111111331133113311331110",
    "011111111111111111111111111111111111111111111111111111111111111110",
    "044444444444444444444444444444444444444441114444444444444444444440",
    "0566678888888888886669a6b566cc9567d66e6fg111ghhhhhhihhhihihhihhhh0",
    "06jkkkkkkkkkkk6675l696m65n766666l666569fg131giioiiiihhhhhhhhhhohh0",
    "05766p666696kkq6r5c66666s66666666656t66fg111ghihihhhhhhiihhhhihhh0",
    "09666u9656a6kk6l666c656766c666756667667fg131gihhvvvvvvvvvvvvvvvvh0",
    "06n96576666skk66c666565c666666666676666wg111ghhhvxyzyxyxyyyyzzzvh0",
    "066s56666665kk67966656666567q6665656696Ag131ghhhvyBBBBBBBBBBByzvi0",
    "06cl666666e6kkkkkkkkkkkkkkkk66666666666Ag111gihiCzzyyBBBBBByyyxCh0",
    "0666666cD666c676696t66r666kk66666666666wg131ghiiCzxyyzyyyxxxzzzCo0",
    "06cc6n669s66766dlm9979665ckkcc656c67e66Ag111ghEhvzzyFFFFFFFFyyyvh0",
    "09666c6666656667656666e7c6kk9c676666665Gg111ghhhvxyyyyzyyyzxzxzCi0",
    "066a67b6766na5666769c666a6kk766r67566q6H1III1hhJvyKKKxxKKKyzKKKCh0",
    "0966s66LLLLLLL9ccd65766c66kkkkkkkkkkkkkk11111MMMBxyyzzzyxzyxyyyvh0",
    "06lcLLLNONONONLLLa56666c66666c965p666q6H1III1hhJvzxyyzyxxzxyzzxvh0",
    "0u6LNONONONONONONL696966p96c7c6666669p7Gg111gPhhvyxzxxzyxyzyyyyvo0",
    "06LNONONONONONONONL9666a666696765667665Ag111ghihCxKKKyyKKKzyKKKvh0",
    "0c6LNONONONONONONL66n5666799e669566a667fg131gihhCyyyyyzxyyyyxyxvi0",
    "0665LLLNONONONLLL6c96696666676669656666Ag111ghQivvvvvvvvvvvvvvvvh0",
    "06ccn76LLLLLLL66d756666s66765666c666666wg131ghhohihhhhihhhihhhohh0",
    "067667766666667665666666l57666ce6696667wg111ghihhhhhhihhhhhihhihi0",
    "000000000000000000000000000000000000000000000000000000000000000000"
  ]
};
