/**
 * 布尔
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type Boolean = boolean

export const Boolean = function validateBoolean (value: any) : string {
  return exec(() => {
    validate(value, 'value').isBoolean()
  })
}