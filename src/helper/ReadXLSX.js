import * as XLSX from "xlsx";

export function ReadXLSX(file) {
  // Read the Excel file and convert it to a JSON object
  const workbook = XLSX.readFile(file);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const json = XLSX.utils.sheet_to_json(sheet);

  // Use the JSON object in your React application
  // console.log(json, "from reader");
}
