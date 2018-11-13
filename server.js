var solver = require("javascript-lp-solver");

var results,
  model = [
    "max: 1 ps1n11 1 ps1n21 1 ps1n31 1 ps1n41",
    "1 ps1n11 3 ps2n12 5 ps3n13 <= 10",
    "1 ps1n21 3 ps2n22 5 ps3n33 <= 10",
    "1 ps1n31 3 ps2n22 5 ps3n33 <= 20",
    "1 ps1n41 3 ps2n22 5 ps3n33 <= 20",
    "1 ps1n11 1 ps1n21 1 ps1n31 1 ps1n41 = 10",
    "3 ps2n12 3 ps2n22 3 ps2n32 3 ps2n42 = 15",
    "5 ps3n13 5 ps3n23 5 ps3n33 5 ps3n43 = 15",
    "int ps1n11",
    "int ps2n12",
    "int ps3n13",
    "int ps1n21",
    "int ps2n22",
    "int ps3n23",
    "int ps1n31",
    "int ps2n32",
    "int ps3n33",
    "int ps1n41",
    "int ps2n42",
    "int ps3n43",
  ];

// Reformat to JSON model
model = solver.ReformatLP(model);

results = solver.Solve(model);
console.log(results);
