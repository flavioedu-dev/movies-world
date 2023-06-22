import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Router from './Routes/Router'

// Swiper
import { register } from "swiper/element"

register()
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
