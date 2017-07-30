function booWho(bool) {
  if(typeof bool === "boolean"){
    return true;
  } else {
    return false;
  } 
  return bool;
}

booWho("false");
