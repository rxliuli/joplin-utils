import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'normalize.css/normalize.css'

console.log('options script')

const root = document.querySelector('#root')

render(<App />, root)
