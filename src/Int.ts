/**
 * 整数
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

const { isInteger } = Number

export type Int = number

export const Int = function validateInt (value: any) : string {
  return exec(() => {
    validate(value, 'value').isNumber().meet((value: any) => {
      isInteger(value)
    })
  })
}