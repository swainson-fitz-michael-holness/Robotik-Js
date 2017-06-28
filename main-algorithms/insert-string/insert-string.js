function str_insert(string, num, insert) {
  var slice = string.slice(0, num).concat(insert);
  string = slice.concat(string.slice(num, string.length));
  return string;
}
