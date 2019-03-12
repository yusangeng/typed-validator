/**
 * Email
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type Email = string

export const Email = function validateEmail (value: any) : string {
  return exec(() => {
    validate(value, 'value').matchEmail()
  })
}