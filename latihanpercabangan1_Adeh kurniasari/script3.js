console.log("PROGRAM MENENTUKAN GENERASI SESEORANG")

const Tahun_lahir = prompt("Masukan tahun lahir anda :")

if (Tahun_lahir >=1945 && Tahun_lahir <= 1965){
    console.log("Baby Boomer")
}else if(Tahun_lahir >=1966 && Tahun_lahir <= 1979){
    console.log("Generasi X")
}else if(Tahun_lahir >=1980 && Tahun_lahir <=1994){
    console.log("Generasi Y")
}else if(Tahun_lahir >=1995 && Tahun_lahir <=2015){
    console.log("Generasi Z")
}


