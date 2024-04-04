console.log("KALKULATOR BMI");

let tinggi_badan = prompt("Masukan tinggi badan");
console.log("Tinggi badan anda : "+tinggi_badan + " "+"cm");

let berat_badan = prompt("Masukan berat badan ");
console.log("Berat badan anda : "+berat_badan +" "+"kg");

let index_BMI = berat_badan / (tinggi_badan * tinggi_badan) * 10000;
console.log("index BMI anda ; "+index_BMI);