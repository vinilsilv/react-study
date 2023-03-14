import * as ReactDOMClient from 'react-dom/client'

import Greetings from './components/Greetings';

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <>
    <Greetings type="Good morning" name="Joe" />
  </>
);