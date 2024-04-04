const b = parseInt(prompt("Silahkan masukkan nilai N "));

let jumlah = 0;
for (let i = 1; i <= b; i++) {
  jumlah = jumlah + i;
}

console.log(
  "Jumlah nilai deret \n antara 1 sampai " + b + " adalah = " + jumlah
);
