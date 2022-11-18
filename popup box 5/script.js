// var nama = prompt('masukkan nama:');
// alert('selamat datang di web kami '+ nama);

// var iykh = confirm('kamu yakin?');
// alert(iykh);

// var topup = confirm('kamu mw topap');
// if( topup === true){
//     alert('kamu mau topap berapaan');
// }
// else{
//     alert('kamu ga jadi topap');
// }

alert('selamat datang di web setsu');
var mengulang = true;

while( mengulang === true ){
    var nama = prompt('masukan nama');
    alert('hai '+nama+ ', apa kamu topap?');
    var topup = confirm('yakin mau topup?');
    if ( topup === true){
        alert('pencet tombol hijau dipojok bawah ya');
    }
    else {
        alert('oke');
    }

    mengulang = confirm('mau input nama lagi?');
}

alert('terima kasih')