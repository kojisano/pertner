// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react';
import ReactDom from 'react-dom';

document.addEventListener("DOMContentLoaded", ()=> {
  ReactDom.render(<div>Hello react</div>, document.getElementById('app'))
})
