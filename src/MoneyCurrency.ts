/**
 * 带币种的金额
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import { Money, MoneyRange } from './Money'
import exec from './utils/exec'
import { tryCheckMoney, checkMoney } from './utils/checkMoney'

export type MoneyCurrency = {
  amount: Money
  currency: string
}

export const MoneyCurrency = function validateMoney (value: any) {
  let ret = exec(() => {
    validate(value, 'value')
      .has('amount')
      ._.has('currency').match(/^[A-Z]{3}$/).not.eq('RMB')
  })
  
  if (!ret.length) {
    ret = checkMoney(value.amount)
  }
  
  return ret
}

export type MoneyCurrencyRange = {
  lower: Money
  upper: Money
  currency: string
}

export const MoneyCurrencyRange = function validateMoneyRange (value: any) {
  let ret = MoneyRange(value)

  if (!ret.length) {
    ret = exec(() => {
      validate(value, 'value').has('currency').match(/^[A-Z]{3}$/).not.eq('RMB')
    })
  }

  return ret
}