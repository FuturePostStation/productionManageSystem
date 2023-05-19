/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-19 10:28:59
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-19 10:32:25
 */
declare module '@/utils/secret' {
  export function AESEncrypt(word:string, data: string, key: string): string;
  export function RSAencrypt(data: string, publicKey: string): string;
  export function Base64Decrypt(data: string): string;
}