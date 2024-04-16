const s1 = 8;
const s2 = 5;
const s3 = 10;
const s4 = 6;
const s5 = 7;
const s6 = 3;

const volumeS1 = s1 * s1 * s1; // 512
const volumeS2 = s2 * s2 * s2; // 125
const volumeS3 = s3 * s3 * s3; // 1000
const volumeS4 = s4 * s4 * s4; // 216
const volumeS5 = s5 * s5 * s5; // 243
const volumeS6 = s6 * s6 * s6; // 27

let total = volumeS1 + volumeS2; 
total = volumeS3 + volumeS4;
total = volumeS5 + volumeS6;
console.log(total);


// CONTOH FUNCTION

// user un-difained function (membuat function sendiri)
function namaFungsi(a, b ) {
    console.log(a + " suka " + b);
}
namaFungsi(" v ", " jk ");



// FUNCTION YANG BISA MENGEMBALIKAN NILAI

function penjumlahan(a, b) {
    return a + b; 
}

function pengurangan(a, b) {
    return a - b; 
}

let lanjut;
do {
console.log("-- APLIKASI KALKULATOR SEDERHANA --")
console.log("====================================")
console.log("silahkan pilih menu di bawah : ")
console.log("1. penjumlahan ")
console.log("2. pengurangan")
console.log("3. perkalian")
console.log("4. pembagian")
console.log("==================================")


const menu = prompt("pilih menu: ")

let a, b
switch (menu) {
    case "1":
         a = parseInt(prompt("Masukan nilai a : "));
         b = parseInt(prompt("Masukan nilai b : "));
        console.log(penjumlahan(a, b));
        break;

    case "2":
         a = prompt("Masukan nilai a : ");
         b = prompt("Masukan nilai b : ");
        console.log(parseInt(pengurangan(a, b)));
        break;

    case "3":
         a = prompt("Masukan nilai a : ");
         b = prompt("Masukan nilai b : ");
        console.log(parseInt(perkalian(a, b)));
        break;

    case "4":
         a = prompt("Masukan nilai a : ");
         b = prompt("Masukan nilai b : ");
        console.log(parseFloat(pembagian(a, b)));

    default:
        alert("Menu yang anda pilih tidak tersedia!");
        break;
}
lanjut = prompt("Mau pilih menu yang lain? (Y/T)")
} while (lanjut === "Y" || lanjut === "y")

console.log("-- PROGRAM SELESAI --")


/*
// function deklarasi
function perkalian(a, b) {
    return a * b; 
}

// function ekspresi
const pembagian = function (a, b) {
    return a / b; 
}

// arrow function
const modulus =(a, b) => {
    return a % b
}
*/




