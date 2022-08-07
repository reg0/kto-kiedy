import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(utc)
dayjs.extend(weekday)
dayjs.extend(weekOfYear)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
