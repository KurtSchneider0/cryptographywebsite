def encryptotp(text, key):
    encryptedstring = ""
    for i in range(len(text)):
        char = text[i]
        if char not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
            encryptedstring += char
        elif (char.isupper()):
            letter = chr(((ord(char.lower()) - 97) + (ord(key[i].lower()) - 97) + 1) % 26 + 97)
            encryptedstring += letter.upper()
        else:
            encryptedstring += chr(((ord(char.lower()) - 97) + (ord(key[i].lower()) - 97) + 1) % 26 + 97)
    return encryptedstring

def decryptotp(text, key):
    decryptedstring = ""
    for i in range(len(text)):
        char = text[i]
        if char not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
            decryptedstring += char
        elif (char.isupper()):
            letter= chr(((ord(char.lower()) - 97) - (ord(key[i].lower()) - 97) - 1) % 26 + 97)
            decryptedstring += letter.upper()
        else:
            decryptedstring += chr(((ord(char.lower()) - 97) - (ord(key[i].lower()) - 97) - 1) % 26 + 97)
    return decryptedstring