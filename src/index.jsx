import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Bin2Dec from './bin2dec';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<Bin2Dec />);
