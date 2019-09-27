function generate() {

    let security = document.getElementById("dropdown").nodeValue;

    let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]\^_`{\}~";

    let password = "";

    for(var i = 0; i <=security; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;
    
}