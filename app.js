// helpers
const cryptoJS = require('crypto-js')
const bip39 = require('bip39')
// const cipher = require('simple-cipher-js')
const { caesar, rot13 } = require('simple-cipher-js')

// Caesar Cipher
const encrypt = rot13.encrypt('hello world!')      // input hello world!
console.log("This is my encrypted data:", encrypt)        // output uryyb jbeyq!

const decrypt = rot13.decrypt('fvzcyr pvcuref ner sha') // input fvzcyr pvcuref ner sha 
console.log("This is my decrypted data:", decrypt)  // output simple ciphers are fun

const rome = caesar.encrypt('Africa Data School!', 4) // =>  ejvmge hexe wglssp!
console.log("This is my encrypted data :", rome)

const romedecrypt = caesar.decrypt('ejvmge hexe wglssp! ', -4) // => Africa Data School!
console.log("This is my decrypted data:", romedecrypt )

// Advanced Encryption Standard AES Encryption
// Encrypt plain text encryption
const ciphertext = cryptoJS.AES.encrypt('my message', 'secret key 123').toString()
console.log("encrpted", ciphertext)

// Decrypt
const bytes  = cryptoJS.AES.decrypt(ciphertext, 'secret key 123')
console.log("code for decrypting:", bytes)
const originalText = bytes.toString(cryptoJS.enc.Utf8)

console.log("my original text:", originalText); // 'my message'

// Encrypt object encryption
const data = [{id: "Today is"}, {id: 2}]

var ciphertext2 = cryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString()
console.log(ciphertext2)

// Decrypt
var bytes2  = cryptoJS.AES.decrypt(ciphertext2, 'secret key 123')
var decryptedData = JSON.parse(bytes2.toString(cryptoJS.enc.Utf8))

console.log("my original data:", decryptedData)// [{id: 1}, {id: 2}]


// generate phrase words
const mnemonic1 = bip39.generateMnemonic() // phrase words generating
console.log("my pharse words:",mnemonic1)

// defaults to BIP39 English word list
// uses HEX strings for entropy
const mnemonic = bip39.entropyToMnemonic('00000000000000000000000000000000') // => abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
console.log("English word list:", mnemonic)

// reversible
const rev = bip39.mnemonicToEntropy(mnemonic)  // => '00000000000000000000000000000000'
console.log("reversible:", rev)
