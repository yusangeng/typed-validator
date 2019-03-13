/**
 * Date
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type Date = number

export const Date = function validateDate (value: any) : string {
  return exec(() => {
    validate(value, 'value').isSafeInteger().egt(0)
  })
}

export type DateRange = {
  start: Date
  end: Date
}

export const DateRange = function validateDateRange (value: any) {
  return exec(() => {
    validate(value, 'value')
      .has('start').isSafeInteger().egt(0)
      ._.has('end').isSafeInteger().egt(0)
      ._.meet((value: any) => {
        const { start, end } = value
        if (end < start) {
          throw new Error('end should NOT less than start.')
        }
      })
  })
}