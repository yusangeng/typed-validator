/**
 * IP地址
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type IP = string

export const IP = function validateIP (value: any) : string {
  return exec(() => {
    validate(value, 'value').matchIP()
  })
}