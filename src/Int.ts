/**
 * 整数
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type Int = number

export const Int = function validateInt (value: any) : string {
  return exec(() => {
    validate(value, 'value').isSafeInteger()
  })
}