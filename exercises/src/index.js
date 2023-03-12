import * as ReactDOMClient from 'react-dom/client'

import First from './components/First'

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement);
root.render(<First/>);