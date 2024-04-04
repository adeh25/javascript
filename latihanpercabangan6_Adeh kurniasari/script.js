console.log("PROGRAM KALKULATOR SEDERHANA");
console.log("1. PENJUMLAHAN");
console.log("2. PENGURANGAN");
console.log("3. PERKALIAN");
console.log("4. PEMBAGIAN");
console.log("5. KELUAR PROGRAM");
console.log();

let angka1;
let angka2;

const menu = prompt("Silahkan pilih menu");
if (menu <= 4) {
  angka1 = parseInt(prompt("Silahkan masukan angka pertama"));
  angka2 = parseInt(prompt("Silahkan masukan angka ke dua"));
  console.log("ANGKA PERTAMA :" + angka1);
  console.log("ANGKA KEDUA :" + angka2);
}

console.log();

let hitung;
switch (menu) {
  case "1":
    hitung = angka1 + angka2;
    console.log("Hasil dari " + angka1 + " + " + angka2 + " = " + hitung);
    break;
  case "2":
    hitung = angka1 - angka2;
    console.log("Hasil dari " + angka1 + " - " + angka2 + " = " + hitung);
    break;
  case "3":
    hitung = angka1 * angka2;
    console.log("Hasil dari " + angka1 + " * " + angka2 + " = " + hitung);
    break;
  case "4":
    hitung = angka1 / angka2;
    console.log("Hasil dari " + angka1 + " : " + angka2 + " = " + hitung);
    break;

  default:
    console.log("Keluar program.....terimakasih !");
    break;
}

