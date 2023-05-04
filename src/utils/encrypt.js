/* eslint-disable no-undef */
import crypto from 'crypto'

const ENCRYPTION_KEY = 'tpoagsuebszYhaVque7nFavRoPPjdgab'
// const ENCRYPTION_IV2 = 'hsBusjauNRqifhsg';

const algorithm = 'aes-256-ctr'
const iv = crypto.randomBytes(16)

//encrypt
export async function encrypt(payload) {
  const text = JSON.stringify(payload)
  const cipher = crypto.createCipheriv(algorithm, ENCRYPTION_KEY, iv)

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
  const content = encrypted.toString('hex')
  const ivString = iv.toString('hex')
  const hash =
    content.slice(0, 10) + ivString + content.slice(10, content.length)
  return hash
}
//decrypt
export async function decrypt(hash) {
  try {
    const hashLength = hash.length
    const iv = hash.slice(10, 42)
    const content = hash.slice(0, 10) + hash.slice(42, hashLength)
    const decipher = crypto.createDecipheriv(
      algorithm,
      ENCRYPTION_KEY,
      Buffer.from(iv, 'hex')
    )
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(content, 'hex')),
      decipher.final(),
    ])
    try {
      return JSON.parse(decrypted.toString())
    } catch (e) {
      return decrypted.toString()
    }
  } catch (err) {
    // ;
    return false
  }
}
