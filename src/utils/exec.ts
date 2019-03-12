export default function exec(fn: () => void) {
  let ret: string = ''

  try {
    fn()
  } catch (err) {
    ret = err.message
  }

  return ret
}