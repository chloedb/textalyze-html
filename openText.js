function openAndRead(filename) {
  var textfile = document.getElementById("real-file").files[0];
  FileReader.readAsText(textfile, "utf-8");
//   text = process.argv[2];
console.log(textfile);
  return textfile;

  // https://stackoverflow.com/questions/31746837/reading-uploaded-text-file-contents-in-html
