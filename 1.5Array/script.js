// cara pertama
const angka = new Array(1, 3, 5, 7, 9);
console.log(angka);


// cara kedua
const angka2 = new Array(5);
console.log(angka2);


// cara ketiga
const angka3= [2, 4, 6, 8, 10];
console.log(angka3);


// cara keempat 
let angka4 = []


// CARA MENAMFILKAN ISI ARRAY

// cara pertama (ribet)
console.log(angka[0]); // 1
console.log(angka[1]); // 3

// cara kedua (recomended)

// CARA MENAMBAHKAN ISI KE DALAM ARRAY
angka2[0] = 5;
angka2[1] = 12;
angka2[2] = 17;
angka2[3] = 21;
angka2[4] = 28;
console.log(angka2);


angka4[0] = 30;
console.log(angka4);


// CARA MENGHAPUS ELEMEN ARRAY

// cara pertama (pakai undefined)
angka3[2] = undefined;
angka3[4] = undefined;


// cara kedua (pakai keyword delete)
delete angka3[0];
delete angka3[1];
delete angka3[3];
console.log(angka3);

// METHOD ARRAY

// lenght = untuk menampilkan jumlah isi dari array
const arr = [3, 5, 7, 9,11];

console.log(arr.length); // 5

// join= untuk menggabungkan isi array mendjadi sebuah setring
const word = ['K', 'A', 'T', 'A', 'K'];
const word2 = ["selamat", "datang", "di", "BLk"]
console.log(word.join(""));
console.log(word2.join(" "));

// push = untuk menambahkan elemen array di bagian terakhir
arr.push(13, 15, 17); // bisa menambahkan lebih dari satu elemen
word.push("B", "E", "R", "A", "C", "U", "N");
word2.push("Karawang");
console.log(arr);
console.log(word.join("") + " \n" + word2.join(" "));

// pop = untuk menghapus elemen teraakhir pada array
arr.pop();
console.log(arr);

// unshift = untuk menambahkan elemen di awal array
arr.unshift(1);
console.log(arr);

// shift = untuk menghapus elemen pertama pada array
word.shift();
console.log(word);

// METHOD ARRAY 2

// slice  = mengambil sebagian dari elemen yang ada (index awal, index akhir)
const siswa = ["adeh", "ratna", "miftah", "alfi", "janah"]

// slice akan menghasilkan array baru
const siswa2 = siswa.slice(2, 5)
console.log(siswa2)

// splice = menyisipkan elemen di index tertentu
// rumusnya (idxAwal, mau Dihapus berapa, elemen1, elemen2....)
siswa.splice(2, 0, "siti", "dani")
console.log(siswa)

// foreach = sama kayak perulangan "for"
const nilai = [70, 75, 82, 65, 58]

nilai.forEach(function(e, i) {
    console.log("index ke- " + i + " = " + e)
})

// sort = untuk mengurutkan array
console.log(nilai.sort())

// map = memetakan nilai yang ada di dalam array (menghasilkan array baru)
const dikalidua = nilai.map(function(e){
    return e * 2
})
console.log(dikalidua)

// filter & find (filter = menyaring) (find = menghasilkan satu nilai pertama dari kriteria)
const bilanganBulat = [2, 3, 1, 7, 6, 9, 11, 8]

// filter
bilanganBulat.filter(function(e){
    return e > 5
})
console.log(bilanganBulat)

// find

const bilanganBulat2 = bilanganBulat.filter(function(e){
    return e > 5
})
console.log(bilanganBulat2)



