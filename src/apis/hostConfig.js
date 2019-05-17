let dev = 'http://127.0.0.1:8888/'
let prod = 'http://140.143.163.171/'
let host = ''
if (process.env.NODE_ENV === 'production') {
  host = prod
} else {
  host = dev
}

export default { host }
