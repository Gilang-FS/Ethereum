// ngerjain sendiri bintang ke bawah

let input = 5;

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log("\n");
}

// cek bantuan google supaya baris ke samping

for (let i = 1; i <= input; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

console.log("");

// dibalik

for (let i = input; i >= 1; i--) {
  let hold = "";
  for (let j = 1; j <= i; j++) {
    hold += "*";
  }
  console.log(hold);
}
