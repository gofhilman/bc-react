import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Greeting from './01-creating-components.jsx'
// import Render from './03-rendering-techniques/01.jsx'
// import RenderComponents from './03-rendering-techniques/02.jsx'
// import RenderConditionally from './03-rendering-techniques/03.jsx'
// import RenderConditionals from './03-rendering-techniques/04.jsx'
// import TodoList from './04-keys.jsx'
// import NoProp from './05-passing-data/01.jsx'
// import Prop from './05-passing-data/02.jsx'
// import PropFunction from './05-passing-data/03.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
