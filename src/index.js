import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.jsx'
import * as serviceWorker from './serviceWorker'

// встраивает на страницу наше приложение в указанный блок
// можно вставлять несколько реакт приложений на одну страницу
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
