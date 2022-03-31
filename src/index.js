import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { AppRouter } from './AppRouter.js';



const divRoot = document.querySelector('#root');

ReactDOM.render( <AppRouter />, divRoot);  //cargo el componente de

