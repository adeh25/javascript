// if statement

const total_belanja = 80000;

if (total_belanja > 100000) {
    console.log("Selamat anda mendapatkan hadiah!");
}
console.log("Terimakasih Sudah berbelanja");

// if...else statement
/*
const Total_belanja = prompt("Masukan total belanja :");

if(total_belanja > 100000) {
    console.log("Selamat anda mendapatkan piring cantikk!");
} else {
    console.log("Mohon maaf anda belum dapat hadiah");
}

console.log("Terimakasih sudah berbelanja");
*/
// 2. login
/*
const password = "legendofaang";

if (password === "legendofaang"){
    console.log("Silahkan masuk, ang!");
} else {
    console.log("password salah, silahkan coba lagi!");
} 
*/

// if...else if...else statement
/*
const nilai = prompt("Masukan nilai anda : ");

if (nilai >= 80){
    console.log("Nilai anda berpredikat BAIK");
} else if (nilai >= 65){
    console.log("Nilai anda berpredikat CUKUP");
} else if ( nilai >= 50){
    console.log("Nilai anda berpredikat BURUK");
}else{
    console.log("Nilai anda berpredikat SANGAT BURUK");
}
*/
//switch stetment

const warna1 = "merah";
let pesan = "";

switch (warna1) {
    case "merah":
        pesan = "Anda memilih warna merah";
        break;

    case "biru":
        pesan = " Anda memilih warna biru";
        break;

    case "orange":
        pesan = "Anda memilih warna orange";
        break;

    default:
        pesan = "Warna yang anda pilih tidak ada!";
        break;
}
console.log(pesan);



