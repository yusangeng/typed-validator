/**
 * 字符串
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type String = string

export const String = function validateString (value: any) : string {
  return exec(() => {
    validate(value, 'value').isString()
  })
}