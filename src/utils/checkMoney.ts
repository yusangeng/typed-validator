
import validate from 'io-validate'
import exec from './exec'

export function checkMoney (value: string) : string {
  return exec(() => {
    const n = parseFloat(value)

    validate(n, 'n').egt(0)
    validate(value, 'value').map((value: any) => {
      return value.replace(/^[-+]?\d+\./, '').length
    }).elt(2)
  })
}

export function tryCheckMoney (value: string) {  
  const n = parseFloat(value)

  validate(n, 'n').egt(0)
  validate(value, 'value').map((value: any) => {
    return value.replace(/^[-+]?\d+\./, '').length
  }).elt(2)
}