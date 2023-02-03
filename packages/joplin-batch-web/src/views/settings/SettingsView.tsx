import * as React from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import { config, Config, noteApi } from 'joplin-api'
import { useLocalStorage } from 'react-use'
import { i18n } from '../../constants/i18n'

export const SettingsView: React.FC = () => {
  const [form] = Form.useForm<Config>()

  async function onFinish() {
    if (!(await form.validateFields())) {
      return
    }
    const values = form.getFieldsValue()
    console.log('onFinish: ', values)
    try {
      config.token = values.token
      config.baseUrl = values.baseUrl
      await noteApi.list({ limit: 1 })
      setSettings(values)
      message.success(i18n.t('settings.msg.success'))
    } catch (e) {
      console.error(e)
      message.error(i18n.t('settings.msg.error'))
    }
  }

  const [settings, setSettings] = useLocalStorage<Config>('settings')

  return (
    <Card>
      <h2>{i18n.t('settings.title')}</h2>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={
          { token: settings?.token, baseUrl: settings?.baseUrl ?? 'http://localhost:41184' } as Partial<Config>
        }
      >
        <Form.Item
          name={'baseUrl' as keyof Config}
          label={i18n.t('settings.form.baseUrl')}
          rules={[{ required: true }]}
        >
          <Input type={'url'} />
        </Form.Item>
        <Form.Item name={'token' as keyof Config} label={i18n.t('settings.form.token')} rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type={'primary'} htmlType={'submit'}>
            {i18n.t('settings.action.submit')}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
