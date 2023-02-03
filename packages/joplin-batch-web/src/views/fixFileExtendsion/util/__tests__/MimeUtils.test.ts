import { expect, it, describe } from 'vitest'
import { MimeUtils } from '../MimeUtils'

describe('MimeUtils', function () {
  it('should get the file extension from the mime type', async () => {
    expect(MimeUtils.toFileExtension('image/jpeg')).toBe('jpg')
    expect(MimeUtils.toFileExtension('image/jpg')).toBe('jpg')
    expect(MimeUtils.toFileExtension('IMAGE/JPG')).toBe('jpg')
    expect(MimeUtils.toFileExtension('')).toBe(null)
  })

  it('should get the mime type from the filename', async () => {
    expect(MimeUtils.fromFilename('test.jpg')).toBe('image/jpeg')
    expect(MimeUtils.fromFilename('test.JPG')).toBe('image/jpeg')
    expect(MimeUtils.fromFilename('test.doesntexist')).toBe(null)
    expect(MimeUtils.fromFilename('test')).toBe(null)
  })
})
