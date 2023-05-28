import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoApp } from './08-usereducer/TodoApp'

// import './08-usereducer/intro-reducer';
// import { Padre } from './07-tarea-memo/Padre'
// import { ShowIncrement } from './06-memos/ShowIncrement'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemorizeHook'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <TodoApp />
  //</React.StrictMode>,
)
