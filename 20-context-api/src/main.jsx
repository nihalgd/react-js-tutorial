import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './context/theme.jsx'

createRoot(document.getElementById('root')).render(
<Theme>
  <App />
</Theme>
  
 
)
