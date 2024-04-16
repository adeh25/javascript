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

// cara kedua (recomend)
for ( let i = 0; i < angka.length; i++){
    console.log("index ke- " + i + " = " + angka[i] )
}


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





