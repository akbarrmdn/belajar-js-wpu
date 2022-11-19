var s = "";
for (i = 5; i > 0; i--) {
  for (j = 0; j <= 5; j++) {
    if (j >= i) {
      s += "* ";
    } else {
      s += " ";
    }
  }
  s += "\n";
}
console.log(s);

var d = "";
for (var i = 0; i < 6; i++ ){
    if (i % 2 == 0){
        for (var j = 0; j < 6 ; j++){
            if(j % 2 == 0){
                d += "Y";
            } else {
                d += " ";
            }
        }
        d += "\n";
    } else {
        for (var j = 0; j < 6 ; j++){
            if(j % 2 == 0){
                d += " ";
            } else {
                d += "B";
            }
        }
        d += "\n";
    }
}
console.log(d);

