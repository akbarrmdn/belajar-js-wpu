// Pertanyaan 
var nama = prompt('sebutkan nama anda ? ');
alert('hallo '+ nama + ' selamat datang di website kami');
var soal = true;
var comp = true;
while (soal){
    for (var halo = 1; halo <= 5; halo++) {
        if(halo == 1){
            alert('Hai selamat datang di game saya '+ nama);
        }else if (halo == 2){
            alert('silahkan mulai permainannya');
        }else if (halo == 3){
            alert('nama gamenya adalah tebak angka');
        }else if (halo == 4){
            alert('                                 PERATURAN                       \n1. Anda harus memilih angka 1-10, diluar itu salah.\n2. Anda memiliki 3 Kesempatan.\n3. Masukkan angka, bukan huruf.');
        }else if (halo == 5 && soal == true) {
            soal = false;
            confirm('lanjut bermain?');
        }
    }
}

//pilihan komputer
while (comp){
    var inputComp = Math.floor((Math.random() *10)+1);

//kesempatan
    var chance = 3;
    while (chance > 0){
        if ( chance == 3) {
            alert('start')
        }else{
            alert('Ayo anda masih mempunyai '+ chance + ' kesempatan lagi');
        }
    

//pilihan user
var inputUser = prompt('Pilih angka dari 1 sampai 10');

//aturan main 
    if( inputUser == inputComp){
        alert('selamat jawaban anda benar')
        chance = 0;
    } else if (inputUser < inputComp){
        alert('Angka yang anda masukkan lebih kecil');
        chance--
    } else {
        alert('Angka yang anda masukan lebih besar');
        chance--
    }   
}
alert('Angkanya adalah '+ inputComp);
comp = confirm('Mau bermain lagi?');
}
