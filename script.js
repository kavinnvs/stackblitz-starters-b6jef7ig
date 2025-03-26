function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
      let [key, value] = cookie.split("=");
      if (key === name) {
          return value;
      }
  }
  return null;
}


function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}


function updateCounter() {
  let count = getCookie("pageCount");
  count = count ? parseInt(count) + 1 : 1; 
  setCookie("pageCount", count, 7); 
  document.getElementById("countDisplay").innerText = "Page Views: " + count;
}


updateCounter();