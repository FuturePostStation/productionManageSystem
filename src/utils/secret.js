/*
 * @文件描述: 加密处理 AES+RSA
 * @作者: 作者
 * @Date: 2019-02-13 17:34:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-28 16:04:05
 *
 * key：AES与RSA的key统一调用接口获取
 * 加密：前端数据 => AES加密 => 后台RSA加密
 * 解密：后台给加密的数据 => RSA解密（key通过接口获取） => AES解密
 */
import store from "@/store"
const { aesIV, aesPublic, rsaPublic } = store && store.state && store.state.user

const CryptoJS = require("crypto-js") // 引用AES源码js
// Base64加密
export function Base64Encrypt(data) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data))
}
// Base64解密
export function Base64Decrypt(base64) {
  if (!base64) return
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(base64))
}

const rsaPublicKey = Base64Decrypt(rsaPublic) // RSA公钥
const aesPublicKey = Base64Decrypt(aesPublic) // AES公钥
const aesIvs = Base64Decrypt(aesIV) // AES偏移量

/**
 * AES加密方法
 * @param {string/Number} word         加密明文      ---非必传
 * @param {string} [keys=aesPublicKey] 密钥         ---非必传
 * @param {string} [ivs=aesIvs]        偏移量        ---非必传
 * @returns String
 */

export function AESEncrypt(word, keys = aesPublicKey, ivs = aesIvs) {
  if (!word || !keys || !ivs) return console.error("AES加密方法需传明文、密钥、偏移量")
  const key = CryptoJS.enc.Utf8.parse(keys)
  // const key = CryptoJS.enc.Hex.parse(keys)
  const iv = CryptoJS.enc.Utf8.parse(ivs)
  if (!key) return
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  // let encrypted = CryptoJS.DES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString()
}

/**
 * AES解密方法
 * @param {string} word                  解密密文   ---必传
 * @param {string} [keys=aesPublicKey]   密钥      ---非必传
 * @param {string} [keys=aesPublicKey]   偏移量    ---非必传
 * @returns String
 */
export function AESDecrypt(word, keys = aesPublicKey, ivs = aesIvs) {
  if (!word || !keys || !ivs) return console.error("AES解密方法需传密文、密钥、偏移量")
  const key = CryptoJS.enc.Utf8.parse(keys)
  const iv = CryptoJS.enc.Utf8.parse(ivs)
  if (!key) return
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  // let decrypt = CryptoJS.DES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

/**
 * RSA加密方法
 * @param {*} pas                        明文
 * @param {*} [publicKey=rsaPublicKey]   公钥
 * @returns
 */
export function RSAencrypt(pas, publicKey = rsaPublicKey) {
  if (!pas || !publicKey) return console.error("RSA加密方法 需传传明文、公钥")
  // eslint-disable-next-line no-undef
  const jse = new JSEncrypt() // 实例化jsEncrypt对象
  jse.setPublicKey(publicKey) // 设置公钥
  return jse.encrypt(pas)
}

/**
 * RSA解密方法
 * @param {*} pas            密文
 * @param {*} privateKey     私钥
 * @returns
 */
export function RSAdecrypt(pas, privateKey) {
  if (!pas || !privateKey) return console.error("RSA加密方法 需传传明文、私钥")
  // eslint-disable-next-line no-undef
  const jse = new JSEncrypt()
  jse.setPrivateKey(privateKey) // 私钥
  return jse.decrypt(pas)
}
