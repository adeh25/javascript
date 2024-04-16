const perkalian = prompt("Silahkan input angka");
console.log("Berikut tabel perkalian " + perkalian);
for (let a = 1; a <= 10; a++) {
  let jumlah = perkalian * a;
  console.log(perkalian + " x " + a + " = " + jumlah);
}
