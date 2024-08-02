function goBack() {
    history.back();
}







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




function onLoadSite() {
    ionicmail = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>'
    ionictheme = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z"/></svg>'
    ionicinstagram = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>'
    document.getElementById("fixednav").innerHTML = '<button onclick="goBack();">Zur&uuml;ck</button>';
    document.getElementById("footer").innerHTML = '<p style="text-align:center;"><button onclick="changeTheme()" class="themeChanger" title="change Theme">' + ionictheme + '</button></p><p style="text-align:center;"><a href="mailto:sg-news@sgy-dt.de" title="Email">' + ionicmail + '</a><a href="https://instagram.com" target="_blank" title="Instagram">' + ionicinstagram + '</a></p><p style="text-align:center;">SGNews | eine AG des Stadtgymnasium Detmold</p>';
    //theme
    let theme = getCookie("theme");
    if (theme == "dark") {
        document.querySelector('body').classList.add("darkmode");
    }
}





//theme
function changeTheme() {
    let theme = getCookie("theme");
    if (theme == "dark") {
        document.querySelector('body').classList.remove("darkmode");
        document.cookie = "theme = light; expires=Tue, 19 Jan 2038 04:14:07 GMT; path=/";
    } else{
        document.querySelector('body').classList.add("darkmode");
        document.cookie = "theme = dark; expires=Tue, 19 Jan 2038 04:14:07 GMT; path=/";
    }
}