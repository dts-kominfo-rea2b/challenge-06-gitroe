// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (value) => {
  file1 = value;
};
let modifyFile2 = (value) => {
  file2 = value;
};
let modifyFile3 = (value) => {
  file3 = value;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const hasil = [];
    fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
        const content = JSON.parse(data);
        message = content.message;
        hasil.push(message.split(' ')[1]);

    fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
        const contents = JSON.parse(data);
        message = contents[0].message;
        hasil.push(message.split(' ')[1]);

    fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
        const konten = JSON.parse(data);
        message = konten[0].data.message;
        hasil.push(message.split(' ')[1]);

        console.log(hasil);
        fnCallback(err, hasil);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
