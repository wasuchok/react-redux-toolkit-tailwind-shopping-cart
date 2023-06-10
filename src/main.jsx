import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//tailwind css
import './styles/index.css'

//react-router-dom
import { BrowserRouter as Router } from 'react-router-dom'

//redux toolkit
import { store } from './store/store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
)
