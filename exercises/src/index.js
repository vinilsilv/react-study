import * as ReactDOMClient from 'react-dom/client'

import First from './components/First'
import Morning from './components/Morning'
import Multiple, { Evening } from './components/Multiple'

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <>
    <Multiple.Afternoon name='Joe' />
    <Evening name='Joe' />
  </>
);