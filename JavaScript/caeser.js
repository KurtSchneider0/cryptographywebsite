function encryptcaesar() {
    var input = document.getElementById("klar").value;
    var key = parseInt(document.getElementById("shift").value, 10);
    var encrypted = "";
    for (let letter in input) {
        if (!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(input[letter]))) {
            encrypted += input[letter];
        }
        else if (input[letter] == input[letter].toUpperCase()) {
            encrypted += String.fromCharCode((input[letter].charCodeAt() + key - 65) % 26 + 65);
        }
        else {
            encrypted += String.fromCharCode((input[letter].charCodeAt() + key - 97) % 26 + 97);
        }
    }
    document.getElementById("chiffre").value = encrypted;
}

function decryptcaesar() {
    var input = document.getElementById("chiffre").value;
    var key = parseInt(document.getElementById("shift").value, 10);
    var decrypted = "";
    for (let letter in input) {
        if(!("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(input[letter]))) {
            decrypted += input[letter];
        }
        else if (input[letter] == input[letter].toUpperCase()) {
            if (Math.sign((input[letter].charCodeAt() - key - 65) % 26) == -1) {
                decrypted += String.fromCharCode((26 + ((input[letter].charCodeAt() - key - 65) % 26)) + 65)
            } else {
                decrypted += String.fromCharCode((input[letter].charCodeAt() - key - 65) % 26 + 65)
            }
        }
        else {
            if (Math.sign((input[letter].charCodeAt() - key - 97) % 26) == -1) {
                decrypted += String.fromCharCode((26 + ((input[letter].charCodeAt() - key - 97) % 26)) + 97)
            } else {
                decrypted += String.fromCharCode((input[letter].charCodeAt() - key - 97) % 26 + 97)
            }
        }
    }
    document.getElementById("klar").value = decrypted
}
