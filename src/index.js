import React from 'react';
import { createRoot } from 'react-dom/client';
import  App  from './App';
import "./css1.css";
import "./css2.css";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);