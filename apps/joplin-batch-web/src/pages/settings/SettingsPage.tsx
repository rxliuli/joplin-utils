import * as React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { Config } from 'joplin-api'
import { useLocalStorage } from 'react-use'

type SettingsPageProps = {}

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const [form] = Form.useForm<Config>()

  async function onFinish() {
    if (!(await form.validateFields())) {
      return
    }
    const values = form.getFieldsValue()
    console.log('onFinish: ', values)
    setSettings(values)
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
          <Button htmlType={'submit'}>提交</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
