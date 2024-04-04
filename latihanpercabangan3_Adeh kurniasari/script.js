console.log("PROGRAM MENENTUKAN DISKON BELANJA");

const totalbelanja = prompt("Silahkan masukan total belanja");
console.log("Total belanja : " + totalbelanja);

if (totalbelanja <= 100000) {
  console.log("Tidak dapat diskon");
  console.log("Total yang harus di bayar : " + totalbelanja);
} else if (totalbelanja >= 100000 && totalbelanja < 500000) {
  console.log("Selamat anda mendapat diskon 10% !");
  console.log( "Total yang harus di bayar : " + (totalbelanja - totalbelanja * 0.1) );
} else if (totalbelanja >= 500000 && totalbelanja < 1000000) {
  console.log("Selamat anda mendapat diskon 20% !");
  console.log( "Total yang harus di bayar : " + (totalbelanja - totalbelanja * 0.2) );
} else if (totalbelanja >= 1000000) {
  console.log("Selamat anda mendapat diskon 30% !");
  console.log("Total yang harus di bayar : " + (totalbelanja - totalbelanja * 0.3) );
}
