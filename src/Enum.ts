/**
 * 枚举
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type EnumValue = {
  text: string
  value: number | string
} | number | string

export type EnumOption = {
  text: string
  value: number | string
}

export type EnumOptions = EnumOption[]
export type EnumValueMulti = EnumOption[]

export type FValidate = (value: any) => string

export const EnumValue = function createEnumValidator (...options: EnumOptions) : FValidate {
  return function validateEnum (value: any) {
    if (value === null || typeof value === 'undefined') {
      return `Bad enum value: ${value}.`
    }

    const result = options.find(el => {
      if (el.value === value) {
        // 只传id进来
        return true
      }

      const { value: v, text } = value
      return el.value === v && el.text === text
    })

    if (!result) {
      return `Bad enum value: ${value}.`
    }

    return ''
  }
}

export const EnumOption = function validateEnumOption (value: any) {
   return exec(() => {
     validate(value, 'value')
     .has('value').or(validate.plan.isNumber(), validate.plan.isString())
     ._.has('text').isString()
   })
}

export const EnumOptions = function validateEnumOptions (value: any) {
  return exec(() => {
    validate(value, 'value').isArrayLike().isArrayOf((el: any) => {
      const ret = EnumOption(el)
      
      if (ret.length) {
        throw new Error(ret)
      }
    })
  })
}

export const EnumValueMulti = function createEnumMultiValidator (...options: EnumOptions) : FValidate {
  const elementValidate = EnumValue(...options)

  return function validateEnumMulti (value: any) {
    return exec(() => {
      validate(value, 'value').isArrayOf((el: any) => {
        const ret = elementValidate(el)
        
        if (ret.length) {
          throw new Error(ret)
        }
      })
    })
  }
}
