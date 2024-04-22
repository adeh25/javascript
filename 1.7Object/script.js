const mahasiswa = {
  // key - value pair (pasangan kunci - nilai)
  nama: "Adeh kurniasari", // property
  nim: "123456",
  umur: 19,
};

console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

// menambahkan property ke dalam object
mahasiswa["alamat"] = "Rawagabus pos";
mahasiswa["no_telpon"] = "0856345627";
mahasiswa["sapa"] = function () {
  console.log("Hallo nama saya Adeh");
};

console.log(mahasiswa.alamat);

// memanggil property function di dalam object
console.log(mahasiswa.sapa());

// menghapus property pada object
delete mahasiswa["umur"];
console.log(mahasiswa);

// membuat object lebih dari satu (pakai array)
const siswaBLk = [
  {
    nama: "Adeh kurniasari",
    alamat: "karawang",
    umur: 20,
  },
  {
    nama: "annisah",
    alamat: "karawang",
    umur: 37,
  },
  {
    nama: "ratna dwi astuti",
    alamat: "kosambi",
    umur: 19,
  },
  {
    nama: "miftahul maubi",
    alamat: "ckm",
    umur: 25,
  },
];

console.log(
  "Hallo nama saya " +
    siswaBLk[0].nama +
    ", alamat di " +
    siswaBLk[0].alamat +
    ", umur saya " +
    siswaBLk[0].umur
);

const kependudukan = [
    {
        nik: "321507650904003",
        nama: "adeh",
        sapa: function(){
            console.log("object ini milik " + this.nama)
        }
    }

]
// kata kunci ( this )
console.log(this);