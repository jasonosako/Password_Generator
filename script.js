function generate() {

    var characters = prompt("Enter password character length between 8-128 characters", "");
    let security = parseInt(characters)
    console.log(security);
    let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]\^_`{\}~";

    if (characters < 8) {
        alert("Password length must be at least 8 characters");
        return;
      }

      if (characters > 128) {
        alert("Password length must less than 129 characters");
        return;
      }

    let password = "";

    for(var i = 0; i <=security; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    console.log(password);
    $('#display').text(password);

}

function copy() {

    document.getElementById("display").select();

    document.execCommand("copy");

    alert("Password Copied to Clipboard");

}