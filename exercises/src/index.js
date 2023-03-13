import * as ReactDOMClient from 'react-dom/client'

import First from './components/First'
import Morning from './components/Morning'

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement);
root.render(<Morning name='Joe'/>);