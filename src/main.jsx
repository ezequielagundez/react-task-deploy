import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TaskContextProvider} from './Context/TaskContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <TaskContextProvider>
   <App />
   </TaskContextProvider>
    
    
    
  </React.StrictMode>
)
