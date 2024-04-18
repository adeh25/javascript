function kubus(s) {
  return s * s * s;
}

function balok(p, l, t1) {
  return p * l * t1;
}

function tabung(r1, t2) {
  return 3.14 * (r1 * r1 * t2);
}

function bola(r2) {
  return 0.75 * 3.14 * (r2 * r2 * r2);
}

function Kerucut(r3, t3) {
  return (3.14 * (r3 * r3 * t3)) / 3;
}

let lanjut;
do {
  console.log("-- PROGRAM MENGHITUNG VOLUME BANGUN RUANG --");
  console.log("============================================");
  console.log("silahkan pilih menu di bawah : ");
  console.log("1. Kubus ");
  console.log("2. Balok ");
  console.log("3. Tabung ");
  console.log("4. Bola ");
  console.log("5. Kerucut ");
  console.log("===========================================");

  const menu = prompt("pilih menu: ");

  let s, p, l, t1, t2, t3, r1, r2, r3;
  switch (menu) {
    case "1":
      s = prompt("Masukan nilai s : ");
      console.log("Volume kubus adalah : " + parseInt(kubus(s)));
      console.log();
      break;

    case "2":
      p = prompt("Masukan nilai p : ");
      l = prompt("Masukan nilai l : ");
      t1 = prompt("Masukan nilai t : ");
      console.log("Volume balok adalah : " + parseInt(balok(p, l, t1)));
      console.log();
      break;

    case "3":
      r1 = prompt("Masukan nilai r : ");
      t2 = prompt("Masukan nilai t : ");
      console.log("Volume tabung adalah : " + parseFloat(tabung(r1, t2)));
      console.log();
      break;

    case "4":
      r2 = prompt("Masukan nilai r : ");
      console.log("Volume bola adalah : " + parseFloat(bola(r2)));
      console.log();
      break;

    case "5":
      r3 = prompt("Masukan nilai r : ");
      t3 = prompt("Masukan nilai t : ");
      console.log("Volume kerucut adalah : " + parseFloat(Kerucut(r3, t3)));
      console.log();
      break;

    default:
      alert("Menu yang anda pilih tidak tersedia!");
      break;
  }
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log();
console.log("-- PROGRAM SELESAI --");
