function convertHTML(str) {
  str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;" ).replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  return str;
}

convertHTML("Dolce & Gabbana");
