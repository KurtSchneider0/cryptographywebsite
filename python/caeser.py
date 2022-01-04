def encrypt(text, key):
    encryptedstring = ""
    for i in range(len(text)):
        char = text[i]
        if char not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
            encryptedstring += char
        elif (char.isupper()):
            encryptedstring += chr((ord(char) + key - 65) % 26 + 65)
        else:
            encryptedstring += chr((ord(char) + key - 97) % 26 + 97)
    return encryptedstring

def decrypt(text, key):
    decryptedstring = ""
    for i in range(len(text)):
        char = text[i]
        if char not in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
            decryptedstring += char
        elif char.isupper():
            decryptedstring += chr((ord(char) - key - 65) % 26 + 65)
        else:
            decryptedstring += chr((ord(char) - key - 97) % 26 + 97)
    return decryptedstring