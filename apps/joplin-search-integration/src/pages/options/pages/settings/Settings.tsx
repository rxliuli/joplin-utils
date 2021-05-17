import React from 'react'
import { useMount } from 'react-use'
import css from './Settings.module.css'
import { useForm } from 'react-hook-form'
import { Settings } from '../../model/Settings'
import { config, noteApi } from 'joplin-api'

const storage = browser.storage.local
const Settings: React.FC = () => {
  const { register, handleSubmit } = useForm<Settings>({
    defaultValues: {
      port: 41184,
    },
  })
  useMount(async () => {
    console.log(await storage.get())
  })

  async function onSubmit(data: Settings) {
    console.log('data: ', data)
    await storage.set({
      settings: data,
    })
    try {
      config.token = data.token
      config.port = data.port
      await noteApi.list({
        fields: ['id'],
        limit: 1,
      })
      alert('Token/port settings successes')
    } catch (e) {
      alert('Token/port settings failed')
    }
  }

  return (
    <div className={css.root}>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor={'token'}>Token: </label>
          <input
            ref={register({ required: true })}
            name={'token'}
            id={'token'}
            type={'password'}
          />
        </div>
        <div>
          <label htmlFor={'port'}>Port：</label>
          <input
            ref={register({ required: true })}
            name={'port'}
            id={'port'}
            type={'number'}
          />
        </div>
        <div>
          <button type={'submit'}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Settings
