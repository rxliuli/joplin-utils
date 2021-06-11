import * as React from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import { Config } from 'joplin-api'
import { useLocalStorage } from 'react-use'
import { joplinApiGenerator } from '../../constants/joplinApiGenerator'

type SettingsPageProps = {}

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const [form] = Form.useForm<Config>()

  async function onFinish() {
    if (!(await form.validateFields())) {
      return
    }
    const values = form.getFieldsValue()
    console.log('onFinish: ', values)
    try {
      joplinApiGenerator.token = values.token
      joplinApiGenerator.port = values.port
      await joplinApiGenerator.noteApi.list({ limit: 1 })
      setSettings(values)
      message.success('设置成功')
    } catch (e) {
      console.error(e)
      message.error('无法访问 joplin web clipper api')
    }
  }

  const [settings, setSettings] = useLocalStorage<Config>('settings')

  return (
    <Card>
      <h2>安全设置</h2>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={
          {
            token: settings?.token,
            port: settings?.port ?? 41184,
          } as Partial<Config>
        }
      >
        <Form.Item
          name={'token' as keyof Config}
          label={'Token'}
          rules={[{ required: true }]}
        >
          <Input type={'password'} />
        </Form.Item>
        <Form.Item
          name={'port' as keyof Config}
          label={'Port'}
          rules={[{ required: true }]}
        >
          <Input type={'number'} />
        </Form.Item>
        <Form.Item>
          <Button type={'primary'} htmlType={'submit'}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
