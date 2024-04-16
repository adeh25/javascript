function persegi(s1, s2) {
  return s1 * s2;
}

function persegi_panjang(p, l) {
  return p * l;
}

function lingkaran(r1, r2) {
  return 3.14 * (r1 * r2);
}

function segitiga(a, t) {
  return 0.5 * (a * t);
}

let lanjut;
do {
  console.log("-- PROGRAM MENGHITUNG LUAS --");
  console.log("=============================");
  console.log("silahkan pilih menu di bawah : ");
  console.log("1. persegi ");
  console.log("2. persegi panjang ");
  console.log("3. lingkaran ");
  console.log("4. segitiga ");
  console.log("==================================");

  const menu = prompt("pilih menu: ");

  let a, b;
  switch (menu) {
    case "1":
      a = prompt("Masukan nilai a : ");
      b = prompt("Masukan nilai b : ");
      console.log(parseInt(persegi(a, b)));
      break;

    case "2":
      a = prompt("Masukan nilai a : ");
      b = prompt("Masukan nilai b : ");
      console.log(parseInt(persegi_panjang(a, b)));
      break;

    case "3":
      a = prompt("Masukan nilai a : ");
      b = prompt("Masukan nilai b : ");
      console.log(parseFloat(lingkaran(a, b)));
      break;

    case "4":
      a = prompt("Masukan nilai a : ");
      b = prompt("Masukan nilai b : ");
      console.log(parseFloat(segitiga(a, b)));

    default:
      alert("Menu yang anda pilih tidak tersedia!");
      break;
  }
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("-- PROGRAM SELESAI --");
