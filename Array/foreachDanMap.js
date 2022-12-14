// 6. Foreach Mengurutkan dari atas ke bawah
//var angka = [1,2,3,4,5,6,7,8];
//var buah = ['apple',"mangga","anggur","pepaya","semangka"];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);    
// }

// angka.forEach(function(e){
//     console.log(e);
// });

// buah.forEach(function(e,i){
//     console.log('Ini adalah buah ke ' + (i+1) + ' yaitu buah ' + e + ' yang enak');
// });

// 7. MAP bisa ditambah algoritma
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. Short (Agar terurut)
var angka = [6,20,3,7,40,1,9,2,10];
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join(' - '));