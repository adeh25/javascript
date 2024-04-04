console.log("PROGRAM MENGHITUNG GAJIH KARYAWAN");

const nama=prompt("Silahkan input nama");
const golongan =prompt("Silahkan input golongan");
const jamKerja=prompt("Silahkan input jam kerja");

let gajih_per_jam;

switch (golongan) {
    case "A": 
        gajih_per_jam = 6000;
        break;

    case "B":
        gajih_per_jam = 7000;
        break;

    case "C":
        gajih_per_jam = 8000;
        break;

    case "D":
        gajih_per_jam = 10000;
        break;
}

let total_gajih_per_minggu = jamKerja * gajih_per_jam;

let uang_lembur;

if (jamKerja >48){
    uang_lembur= (jamKerja - 48) * 5000;
}else {
    uang_lembur = 0;
}

const total_gajih = total_gajih_per_minggu + uang_lembur;

console.log("Nama : "+nama);
console.log("Golongan : "+golongan);
console.log("Jumlah jam kerja : "+jamKerja);


console.log(nama+ " menerima gajih sebesar " +total_gajih+ " per minggu");
