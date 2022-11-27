// Game tebak angka
var lagi = true;
var lagiDua = true;
while( lagi ){
    for( var wlcm = 1; wlcm <= 4; wlcm++){
        if( wlcm == 1 ){
            alert('Selamat datang di Game Tebak Angka');
        } else if( wlcm == 2){
            alert('Anda berhak memilih nomor 1-10');
        } else if( wlcm == 3 ){
            alert('                                 PERATURAN                       \n1. Anda harus memilih angka 1-10, diluar itu salah.\n2. Anda memiliki 3 Kesempatan.\n3. Masukkan angka, bukan huruf.');
        } else if( wlcm == 4 && lagi == true) {
            lagi = false;
            confirm('Lanjut bermain?');
        }
    }
}

// Pilihan Computer 
while( lagiDua ){
    var inputComp = Math.floor((Math.random() * 10) + 1);

// Kesempatan
    var chance = 3;
    while( chance > 0 ){
        if( chance == 3){
            alert('Start!!');
        } else{
            alert('Ayo anda masih mempunyai ' + chance + ' kesempatan lagi');
        }

// Pilihan User
var inputUser = prompt('Pilih 1 - 10');
        
// Aturan main         
        if( inputUser == inputComp ){
            alert('Selamat anda benar!');
            chance = 0;
        } else if( inputUser < inputComp ){
            alert('Angka yang anda masukkan lebih kecil!');
            chance--
        } else {
            alert('Angka yang anda masukkan lebih besar!');
            chance--
        }
    }
alert('Angkanya adalah ' + inputComp);
lagiDua = confirm('Mau main lagi?');
}