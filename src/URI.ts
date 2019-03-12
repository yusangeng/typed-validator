/**
 * URI
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type URI = string

export const URI = function validateURI (value: any) : string {
  return exec(() => {
    validate(value, 'value').matchURL()
  })
}