//* 1 ke 5
var s = "";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
//* 5 ke *1
var s ='';
for (let i = 5; i > 0; i--) { //baris
    for (let j = 0; j < i; j++) { //*
        s += '*';
    }
    s += '\n';
    
}
console.log(s);

//*1 ke 5 tapi rata kanan
var s = "";
for (i = 5; i > 0; i--) {
  for (j = 0; j <= 5; j++) {
    if (j >= i) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}
console.log(s);

//*5 ke 1 tapi rata kanan
var s ="";
for (var i = 5; i > 0; i--) {
  for (var j = 5; j > 0; j--) {
    if (j <= i) {
      s += "*";
    } else {
      s += " ";
    }
  }
  s += "\n";
}

console.log(s);

// pola #ganjil genap
var s = "";
for (var i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        s += "#";
      } else {
        s += " ";
      }
    }
    s += "\n";
  } else {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        s += " ";
      } else {
        s += "1";
      }
    }
    s += "\n";
  }
}

console.log(s);

var s = "";
for (var i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        s += "Y";
      } else {
        s += " ";
      }
    }
    s += "\n";
  } else {
    for (var j = 0; j < 6; j++) {
      if (j % 2 == 0) {
        s += " ";
      } else {
        s += "B";
      }
    }
    s += "\n";
  }
}

console.log(s);
