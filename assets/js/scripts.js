//cookie import
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}









//theme
function changeTheme() {
    let theme = getCookie("theme");
    if (theme == "light") {
        document.querySelector('body').classList.remove("whitemode");
        document.cookie = "theme = dark; expires=Tue, 19 Jan 2038 04:14:07 GMT; path=/";
    } else{
        document.querySelector('body').classList.add("whitemode");
        document.cookie = "theme = light; expires=Tue, 19 Jan 2038 04:14:07 GMT; path=/";
    }
}


function easterEgg1() {
    let theme = getCookie("eastereggone");
    if (theme == "1") {
        document.querySelector('body').classList.remove("easteregg1");
        document.cookie = "eastereggone = 0; expires=Tue, 19 Jan 2038 04:14:07 GMT; path=/";
        showMessage("Hackermode disabled")
    } else{
        document.querySelector('body').classList.add("easteregg1");
        document.cookie = "eastereggone = 1; expires=Tue, 19 Jan 2038 04:14:07 GMT; path=/";
        showMessage("Hackermode enabled")
    }
}


function onloadCookies() {
    document.querySelector('footer').innerHTML = '<button onclick="changeTheme();changeImageTheme()" class="themeChanger" title="change Theme"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z"/></svg></button><p>© Selbsthilfegruppe | designed with ♥ by <a href="https://dinoshrimp.vercel.app" target="_blank">DinoShrimp</a></p>';
    let theme = getCookie("theme");
    let one = getCookie("eastereggone");
    if (theme == "light") {
        document.querySelector('body').classList.add("darkmode");
    }
    if (one == "1") {
        document.querySelector('body').classList.add("easteregg1");
    }
}