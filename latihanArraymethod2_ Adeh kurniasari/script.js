const nilai_mahasiswa = [
    36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80, 79
  ];
  
  const nilai1 = [];
  
  nilai_mahasiswa.forEach(function(nilai) {
    if (nilai >= 80) {
      nilai1.push('A');
    } else if (nilai >= 70 && nilai < 80) {
      nilai1.push('B');
    } else if (nilai >= 55 && nilai < 70) {
      nilai1.push('C');
    } else if (nilai >= 45 && nilai < 55) {
      nilai1.push('D');
    } else {
      nilai1.push('E');
    }
  });
  
  const no = [];
  for (let i = 0; i < 20; i++){
    no.push([i + 1, nilai_mahasiswa[i], nilai1[i]]);
  }
  
console.log("==========================================")
console.log("No\t\tNilai uian\t\tIndex nilai")
console.log("========================================")


  no.forEach(function(a) {
    console.log(a.join("\t\t "));
  });
