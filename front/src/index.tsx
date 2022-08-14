import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import GettingStarted from './components/getting-started'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss'

dayjs.extend(utc)
dayjs.extend(weekday)
dayjs.extend(weekOfYear)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<GettingStarted />} />
        </Routes>
      </App>
    </BrowserRouter>, document.getElementById('root')
  </React.StrictMode>
);