import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../css/style.css'
import '../css/animation.css'
import Index from '../router/router'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <Index/>
        </StrictMode>
    </BrowserRouter >
)