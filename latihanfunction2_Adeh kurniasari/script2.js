const jumlah_elemen = parseInt(prompt("Masukan jumlah elemen pada array"));
console.log("Elemen array : " + jumlah_elemen);

let angka = [];
for (let i = 0; i < jumlah_elemen; i++) {
    angka[i]= parseInt(prompt("Masukan nilai ke-" + (i + 1) + " : "));
}

function hitung_total(angka) {
    let total = 0;
    for (let i = 0; i < angka.length; i++) {
        total = total + angka[i];
    }
    return total;
}

function hitung_ratarata(angka) {
    let rata_rata = hitung_total(angka);
    return rata_rata / angka.length;
}

let total = hitung_total(angka);
let rata_rata = hitung_ratarata(angka);

console.log(angka)
console.log("Jumlah dari elemen array adalah : " + total);
console.log("Rata rata dari elemen array adalah : " + rata_rata);
