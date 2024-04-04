console.log("MEMBUAT PROGRAM BULAN")

const Bulan = prompt("Silahkan masukan bulan")

let pesan;
switch (Bulan){
    case "1":
        pesan = "Januari"
        break;
    case "2":
        pesan = "Februari"
        break;
    case "3":
        pesan = "Maret"
        break;
    case "4":
        pesan = "April"
         break;
     case "5":
         pesan = "Mei"
        break;
    case "6":
        pesan = "Juni"
        break;    
    case "7":
        pesan = "Juli"
        break;
    case "8":
        pesan = "Agustus"
        break;
    case "9":
        pesan = "September"
        break;
    case "10":
        pesan = "Oktober"
        break;
    case "11":
        pesan = "November"
        break;
    case "12":
        pesan = "Desember"
        break;
}

console.log("No bulan : "+Bulan)
console.log("Bulan ke "+Bulan+" adalah bulan "+pesan)
