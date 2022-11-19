var item = prompt('Masukan nama makanan / minuman \n (cth: daging,rendang, mie ,susu ,fanta ,coca-cola)');

switch (item) {
    case 'daging':
    case 'rendang':
        alert('ini adalah makanan/minuman SEHAT');
        break;
    case 'mie':   
    case 'fanta':
    case 'coca-cola':
        alert('ini adalah makanan/minuman TIDAK SEHAT');
        break;        
    default:
        alert('anda memasukkan nama yang salah');
        break;
}