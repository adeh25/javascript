console.log("=============================================================")
console.log("Kode barang\tNama produk\t\tHarga\t\tStock")
console.log("=============================================================")

let lanjut;
do {
const kode_barang = prompt("Masukan kode barang :")
const nama_produk = prompt("Masukan nama produk :")
const harga = prompt("Masukan harga :")
const stock = prompt("Masukan stock :")


console.log(
      kode_barang+
      "\t\t" +
      nama_produk +
      "\t\t" +
      harga +
      "\t\t" +
      stock
  );
  lanjut = prompt("Mau pilih menu yang lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");
 console.log("=============================================================")
 

  