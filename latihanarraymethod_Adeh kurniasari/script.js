// No 1
const siswa = [
  "Andrew",
  "Bob",
  "Clark",
  "David",
  "Ethan",
  "Fernando",
  "Gabriel",
];
console.log(siswa);

// No 2
siswa.push("Harold", "Iglesias", "Jackson");
console.log(siswa.join(" "));

// No 3
const siswa1 = siswa.slice(1, 2);
const siswa2 = siswa.slice(3, 4);
const siswa3 = siswa.slice(5, 6);
console.log(siswa1.join(" "), siswa2.join(" "), siswa3.join(" "));

// No 4
siswa.pop();
console.log(siswa);

// No 5
siswa.shift();
console.log(siswa);

// No 6
siswa.unshift("Andy");
console.log(siswa);

// No 7
siswa.splice(5, 1, "Fransesco");
console.log(siswa.join(" "));

// No 8
siswa[4] = undefined;
console.log(siswa);
