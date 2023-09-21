import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"

import GithubState from "./contexts/GitHub/githubState"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GithubState>  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GithubState>

);