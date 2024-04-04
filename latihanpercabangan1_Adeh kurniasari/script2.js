console.log("PROGRAM UNTUK MENENTUKAN NILAI");

const grade = prompt("Silahkan masukan nilai");

if (grade >= 85 && grade <= 100) {
  console.log("grade A");
} else if (grade >= 75 && grade <= 85) {
  console.log("grade B");
} else if (grade >= 65 && grade <= 75) {
  console.log("grade C");
} else if (grade >= 55 && grade <= 65) {
  console.log("grade D");
} else if (grade <= 55) {
  console.log("grade E");
}
