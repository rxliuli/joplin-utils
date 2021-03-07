import React from 'react'
import { useMount } from 'react-use'
import css from './Settings.module.css'
import { useForm } from 'react-hook-form'
import { Settings } from '../../model/Settings'

const storage = browser.storage.local
const Settings: React.FC = () => {
  const { register, handleSubmit } = useForm<Settings>({
    defaultValues: {
      port: 41184,
    },
  })
  useMount(
    async () => {
      console.log((await storage.get()))
    })

  async function onSubmit(data: Settings) {
    console.log('data: ', data)
    await storage.set({
      settings: data,
    })
  }

  return (
    <div className={css.root}>
      <h1>设置</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor={'token'}>令牌: </label>
          <input ref={register({ required: true })} name={'token'} id={'token'} type={'password'} />
        </div>
        <div>
          <label htmlFor={'port'}>端口：</label>
          <input ref={register({ required: true })} name={'port'} id={'port'} type={'number'} />
        </div>
        <div>
          <button type={'submit'}>提交</button>
        </div>
      </form>
    </div>
  )
}

export default Settings
