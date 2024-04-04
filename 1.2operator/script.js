// operator aritmatika

let a = 3;
let b = 2;

let c = a + b;

console.log(c);

a = 6;
b = 3;

c = a * b;

console.log(c);

//penjumlahan
let d = 5;
let e = 4;

let f = d + e;

console.log(f);

//perkalian
d = 7;
e = 5;

f = d * e;

console.log(f);

//pembagian
d = 20;
e = 5;

f = d / e;

console.log(f);

//pengurangan
d = 10;
e = 3;

f = d - e;

console.log(f);

//augmented assigment

let x = 3;
let y = 5;

console.log(x+=y); // x = x + y
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);

// operator unary increment

let k = 5;

console.log(k++);
console.log(k++);
console.log(k++);
console.log(k--);
console.log(k--);
console.log(k--);

// operator perbandingan

let angka1= 10;

if (angka1 % 2 === 0) {
    console.log("ini bilangan genap")
}else {
    console.log("ini bilangan ganjil")
}

// operator string

let kata1 = "Selamat";
let kata2= "Datang";

console.log(kata1+" "+kata2);

kata1 = "Selamat";
kata2 = "Pagi";

console.log(kata1+" "+kata2)

// operator ternary

let angka2 = 15;

const ganjilgenap = 
angka2 % 2 === 0 ? "ini bilangan genap" : "ini bilangan ganjil";

console.log(ganjilgenap);

const password = "luwakwhitecoffe"
const isLogin = password === "luwakwhitecoffe" ?
 "Anda dapat dua juta rupiah" : "lo bayar GUE!";

console.log(isLogin);

// Operator logika
// && (AND), || (OR), ! (Negasi) = TRUE / FALSE

console.log(10%2=== 1 && 10/5 === 2); // && (AND)
console.log(10%2=== 0 || 10/5 === 2); // || (OR)
console.log(!true); // ! (Negasi)

// built in function = prompt, alert, dialog
// hitung luas segitiga

let alas = prompt("masukan alas");
console.log("Alas segitiga : " + alas);

let tinggi = prompt("masukan tinggi");
console.log("Tinggi segitiga : " +tinggi);

let segitiga = (alas * tinggi) /2
console.log("Luas segitiga : " +segitiga);




