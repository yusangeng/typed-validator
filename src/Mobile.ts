/**
 * 手机号
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

// 中国手机号
// 参考资料: https://github.com/VincentSit/ChinaMobilePhoneNumberRegex
const rexp = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/

export type Mobile = string

export const Mobile = function validateMobile (value: any) : string {
  return exec(() => {
    validate(value, 'value').match(rexp)
  })
}
