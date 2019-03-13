/**
 * 国际手机号
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type Mobilei18n = string

export const Mobilei18n = function validateMobilei18n (value: any) : string {
  return exec(() => {
    validate(value, 'value').match(/^[+\d][\d- .]+$/)
  })
}
