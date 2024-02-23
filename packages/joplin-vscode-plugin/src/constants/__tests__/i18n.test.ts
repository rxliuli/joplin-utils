import { expect, it } from 'vitest'
import { initI18n, t } from '../i18n'

it('should return the correct translation', () => {
  initI18n({ language: 'en-US' })
  expect(t('example')).eq('Example')
  initI18n({ language: 'zh-CN' })
  expect(t('example')).eq('示例')
  expect(t('Create tag [{{title}}] success', { title: 'test' })).eq('创建标签 [test] 成功')
})
