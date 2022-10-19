import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './views/App'

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />)