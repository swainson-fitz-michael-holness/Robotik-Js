// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

// FCC Description:
// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  if(typeof bool === "boolean"){
    return true;
  } else {
    return false;
  } 
  return bool;
}

booWho("false");
