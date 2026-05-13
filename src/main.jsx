import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // নিশ্চিত করুন এই লাইনটি আছে
import './index.css' // Tailwind এর জন্য এটি জরুরি

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)