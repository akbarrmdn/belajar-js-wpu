// function faktorial(n) {
//     if ( n === 0) return 1;
//     return n * faktorial(n-1);
// }

// faktorial(2);

function faktorial(k){
	var angka=1;
	var faktor=1;
	 while(angka<=k){
		 faktor=faktor*angka;
		 angka=angka+1;
	 }
	 console.log(faktor)
}
faktorial(5)