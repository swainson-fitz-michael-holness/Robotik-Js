function myReplace(str, before, after) {
  var sentence;
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
    str = str.replace(before, after);
  } else {
    str = str.replace(before, after);
  }
  return str;
}
