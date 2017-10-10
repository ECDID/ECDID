import test from 'ava';
import { Blowfish } from "../src/Blowfish"
import { inspect } from "util";

const testString = "123456789";
const testPassphrase = "password";
const testEncrypted = "da6003664651d153815e183f310c8800"; // calculated using PHP's mcrypt_encrypt()

test("Blowfish.encrypt()", (t) => {
    const bf = new Blowfish(testPassphrase);
    const buff = bf.encrypt(testString);
    t.true(buff instanceof Buffer, "returns a buffer");
    const encrypted = buff.toString("hex");
    t.is(encrypted, testEncrypted, "encrypts correctly");
});

test("Blowfish.decrypt()", (t) => {
    const bf = new Blowfish(testPassphrase);
    const buff = bf.decrypt(testEncrypted);
    t.true(buff instanceof Buffer, "returns a buffer");
    const plain = buff.toString("utf8", 0, testString.length);
    t.is(plain, testString, "decrypts correctly");
});
