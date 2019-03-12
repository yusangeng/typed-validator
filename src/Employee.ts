/**
 * 职员信息
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export interface Employee {
  workNo: string
  name: string
  nickName: string
}

export const Employee = function validateEmployee
 (value: any) : string {
  return exec(() => {
    validate(value, 'value')
      .has('workNo').match(/\d+/)
      ._.has('name').isString()
      ._.has('nickName').isString()
  })
}