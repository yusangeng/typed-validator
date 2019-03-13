/**
 * DateTime
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type DateTime = number

export const DateTime = function validateDateTime (value: any) : string {
  return exec(() => {
    validate(value, 'value').isSafeInteger()
  })
}


export type DateTimeRange = {
  start: DateTime
  end: DateTime
}

export const DateTimeRange = function validateDateTimeRange (value: any) {
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