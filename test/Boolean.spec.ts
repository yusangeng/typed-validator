/* global describe it */
import chai from 'chai'
import xux from '../src'

chai.should()

describe('Boolean', () => {
  describe('validate', () => {
    it('should return "" if boolean value is inputed', async () => {
      xux.Boolean(true).should.be.eq('')
      xux.Boolean(false).should.be.eq('')
    })

    it('should NOT return "" if other value is inputed', async () => {
      xux.Boolean(void 0).should.not.be.eq('')
      xux.Boolean(null).should.not.be.eq('')
      xux.Boolean(1).should.not.be.eq('')
      xux.Boolean('').should.not.be.eq('')
      xux.Boolean({}).should.not.be.eq('')
    })
  })
})