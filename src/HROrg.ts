/**
 * hr领域部门信息
 * 
 * @author Y3G
 */

import validate from 'io-validate'
import exec from './utils/exec'

export type HROrg = {
  id: string
  name: string
}

export const HROrg = function validateHROrg (value: any) {
  return exec(() => {
    validate(value, 'value')
      .has('id').isString()
      ._.has('name').isString()
  })
}
