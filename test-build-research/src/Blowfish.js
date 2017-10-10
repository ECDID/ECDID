import { createCipheriv, createDecipheriv } from "crypto";

const iv = Buffer.from("");
const PADDING_LENGTH = 16;
const PADDING = Array(PADDING_LENGTH).join("\0");

const createCryptor = (key) => {
    key = Buffer.from(key);
    return (data) => {
        var cipher = createCipheriv("bf-ecb", key, iv);
        cipher.setAutoPadding(false);
        var padLength = PADDING_LENGTH - (data.length % PADDING_LENGTH);
        if (padLength === PADDING_LENGTH) {
            padLength = 0;
        }
        try {
            return Buffer.concat([
                cipher.update(data + PADDING.substr(0, padLength)),
                cipher.final()
            ]);
        } catch (e) {
            return null;
        }
    };
};

var createDecryptor = function(key) {
    key = Buffer.from(key);
    return function(data) {
        var cipher = createDecipheriv("bf-ecb", key, iv);
        cipher.setAutoPadding(false);
        try {
            return Buffer.concat([
                cipher.update(data),
                cipher.final()
            ]);
        } catch (e) {
            return null;
        }
    };
};

export class Blowfish {
    constructor(passphrase) {
        this.cryptor = createCryptor(passphrase);
        this.decryptor = createDecryptor(passphrase);
    }

    encrypt(plain) {
        return this.cryptor(plain);
    }

    decrypt(ciphered) {
        return this.decryptor(Buffer.from(ciphered, "hex"));
    }
}
