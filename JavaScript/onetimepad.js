function encryptotp() {
    var input = document.getElementById("klar").value;
    var key = document.getElementById("key").value;
    var encrypted = "";
    for (let index in input) {
        if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(input[index]))) {
            encrypted += input[index];
        }
        else if (input[index] == input[index].toUpperCase()) {
            encrypted += String.fromCharCode(((input[index].toLowerCase().charCodeAt() - 97) + (key[index].toLowerCase().charCodeAt() - 97) + 1) % 26 + 97).toUpperCase();
        }
        else {
            encrypted += String.fromCharCode(((input[index].toLowerCase().charCodeAt() - 97) + (key[index].toLowerCase().charCodeAt() - 97) + 1) % 26 + 97);
        }
    }
    document.getElementById("chiffre").value = encrypted;
}

function decryptotp() {
    var input = document.getElementById("chiffre").value;
    var key = document.getElementById("key").value;
    var decrypted = "";
    for (let index in input) {
        if(!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(input[index]))) {
            decrypted += input[index];
        }
        else if (input[index] == input[index].toUpperCase()) {
            if (Math.sign(((input[index].toLowerCase().charCodeAt() - 97) - (key[index].toLowerCase().charCodeAt() - 97) + 1) % 26) == -1) {
                decrypted += String.fromCharCode((26 + (((input[index].toLowerCase().charCodeAt() - 97) - (key[index].toLowerCase().charCodeAt() - 97) - 1) % 26)) + 97).toUpperCase();
            } else {
                decrypted += String.fromCharCode(((input[index].toLowerCase().charCodeAt() - 97) - (key[index].toLowerCase().charCodeAt() - 97) - 1) % 26 + 97).toUpperCase();
            }
        }
        else {
            if (Math.sign(((input[index].toLowerCase().charCodeAt() - 97) - (key[index].toLowerCase().charCodeAt() - 97) + 1) % 26) == -1) {
                decrypted += String.fromCharCode((26 + (((input[index].toLowerCase().charCodeAt() - 97) - (key[index].toLowerCase().charCodeAt() - 97) - 1) % 26)) + 97);
            } else {
                decrypted += String.fromCharCode(((input[index].toLowerCase().charCodeAt() - 97) - (key[index].toLowerCase().charCodeAt() - 97) - 1) % 26 + 97);
            }
        }
    }
    document.getElementById("klar").value = decrypted
}

function generateRandomKey() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var input = document.getElementById("klar").value;
    var result = "";
    const charactersLength = alphabet.length;
    for ( var i = 0; i < input.length; i++ ) {
        result += alphabet.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("key").value = result;
}