import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import rootReducer from './services/Reducers/Index.jsx'
import { legacy_createStore } from 'redux'

const store = legacy_createStore(rootReducer)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
