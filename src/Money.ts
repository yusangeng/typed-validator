/**
 * 金额
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'
import { tryCheckMoney, checkMoney } from './utils/checkMoney'

export type Money = string

export const Money = function validateMoney (value: any) {
  return checkMoney(value)
}

export type MoneyRange = {
  lower: Money
  upper: Money
}

export const MoneyRange = function validateMoneyRange (value: any) {
  return exec(() => {
    validate(value, 'value')
      .has('lower').meet(tryCheckMoney)
      ._.has('lower').meet(tryCheckMoney)
      ._.meet((value: any) => {
        const { lower, upper } = value
        
        if (lower > upper) {
          throw new Error('upper should NOT less than lower.')
        }
      })
  })
}