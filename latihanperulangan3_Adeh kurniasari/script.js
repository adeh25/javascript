const a = parseInt(prompt("Masukan anak ayam "));
console.log("Anak ayam turun " + a)

for (let b = a; b >= 1; b--) {
   if (b > 1 ) {
   console.log( "Anak ayam turun " + b +  ",  mati satu tinggal " + (b - 1) )
 } else {
    console.log( "Anak ayam turun " + b + ",  Mati satu tinggal induknya" );
 }
}
