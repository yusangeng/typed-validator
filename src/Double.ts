/**
 * 双精度浮点类型
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type Double = string

export const Double = function validateDouble (value: any) : string {
  return exec(() => {
    validate(value, 'value').match(/\-?\d\.\d+/)
  })
}