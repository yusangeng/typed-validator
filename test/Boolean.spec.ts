/* global describe it */
import chai from 'chai'
import { Boolean } from '../src/Boolean'

chai.should()

describe('Boolean', () => {
  describe('validate', () => {
    it('should return "" if boolean value is inputed', async () => {
      Boolean(true).should.be.eq('')
      Boolean(false).should.be.eq('')
    })

    it('should NOT return "" if other value is inputed', async () => {
      Boolean(void 0).should.not.be.eq('')
      Boolean(null).should.not.be.eq('')
      Boolean(1).should.not.be.eq('')
      Boolean('').should.not.be.eq('')
      Boolean({}).should.not.be.eq('')
    })
  })
})