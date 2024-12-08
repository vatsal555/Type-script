// let role: string[] | number[] = ["admin", "manager", 1, 3];

let role: [string, string, number, number, boolean?] = [
  "admin",
  "manager",
  1,
  3,
];

role.push(true);

role[1] = "user";
