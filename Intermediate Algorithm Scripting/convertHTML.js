// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

// FCC Description:
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function convertHTML(str) {
  str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;" ).replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  return str;
}

convertHTML("Dolce & Gabbana");
