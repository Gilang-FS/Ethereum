let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  let ubahNama = input.splice(1, 1, "Roman Alamsyah Elsharawy");
  let ubahProv = input.splice(2, 1, "Provinsi Bandar Lampung");
  let addGander = input.splice(4, 1, "Pria");
  let addSchool = input.splice(5, 1, "SMA Internasional");
  console.log("[" + input + "]");

  let tanggal = input[3].split("/");
  let bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  console.log(bulan[tanggal[1] - 1]);
  console.log(tanggal);

  let hasil = tanggal.join("-");
  console.log(hasil);

  let nama = input[1].slice(0, 15);
  console.log(nama);
}

console.log(dataHandling(input));

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
