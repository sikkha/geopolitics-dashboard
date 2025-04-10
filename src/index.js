import React from 'react';
import ReactDOM from 'react-dom/client';

// Remove the default index.css import if it's no longer needed
// import './index.css';

// ---> Add this line to import your generated Tailwind CSS <---
import './output.css';
// ---> End of added line <---

import App from './App'; // This should render your GeopoliticalDashboard
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
