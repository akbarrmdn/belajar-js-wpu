function tambah(a,b) {
    return a + b;
}
var total = tambah(2 ,3);
console.log(total);

function gaPerluNambahParameter(){
    var hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];        
    }
    return hasil;
}

var coba = gaPerluNambahParameter(1,2,3,4,5,6);
console.log(coba);