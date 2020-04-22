var XLSX = require('xlsx');
var workbook = XLSX.readFile('./test.xlsx');

console.log(workbook.Sheets['Sheet JS'].J1.f);
// change some cell value
workbook.Sheets['Sheet JS'].J1.f = 'SUM(1,12)'

// recalc the workbook
var XLSX_CALC = require('xlsx-calc');
XLSX_CALC(workbook)


console.log(workbook.Sheets['Sheet JS'].J1)
XLSX.writeFile(workbook, 'out.xlsx');
