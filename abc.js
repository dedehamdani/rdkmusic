
var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
document.write(day + " " + months[month] + " " + year);