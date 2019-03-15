/**
 * 职员信息
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type Employee = {
  workNo: string
  name: string
  nickName: string
}

export type EmployeeMulti = Employee[]

export const Employee = function validateEmployee (value: any) {
  return exec(() => {
    validate(value, 'value')
      .has('workNo').match(/\d+/)
      ._.has('name').isString()
      ._.has('nickName').isString()
  })
}

export const EmployeeMulti = function validateEmployeeMulti (value: any) {
  return exec(() => {
    validate(value, 'value').isArrayOf((el: any) => {
      const err = Employee(el)

      if (err.length) {
        throw new Error(err)
      }
    })
  })
}
