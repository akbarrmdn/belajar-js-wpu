var tanya = true;
while (tanya) {

//menangkap pilihan player
var p = prompt('Pilih : gajah, semut, orang');

//menangkap pilihan komputer 
//membangkitkan bilangan random
var comp = Math.random();

if(comp < 0.34){
    comp = 'gajah';
}else if(comp >= 0.34 && comp < 0.67){
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil = '';
//menentukan rules 
if( p == comp ){
    hasil = ('Hasilnya seri bro');
}else if ( p == 'orang'){
    // if( comp == 'gajah'){
    //     hasil('KALAH');
    // }else{
    //     hasil('MENANG');
    // }
    hasil = (comp =='gajah') ? 'KALAH' : 'MENANG';
}else if ( p == 'gajah'){
    hasil = (comp =='orang') ? 'MENANG' : 'KALAH';
}else if ( p == 'semut'){
    hasil = (comp =='orang') ? 'KALAH' : 'MENANG';
}else {
    hasil = 'Memasukkan pilihan yang salah';
}

//tampilkan hasilnya
alert('Kamu memilih '+ p + ' sedangkan komputer memilih ' + comp + '\nMaka hasilnya adalah kamu :' + hasil)

tanya = confirm('LAGI?');
}
alert('terimakasih sudah bermain');