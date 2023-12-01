import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";


import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRmNGfV5yd0VHal1STnNZUiweQnxTdEZiWXxfcHVURWVbU0d2Vg==');
// Set your Syncfusion license key


ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
