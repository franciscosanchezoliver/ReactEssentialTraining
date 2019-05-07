import React from 'react'
import ReactDOM from 'react-dom'

// Create one react element
// Arguments of method React.createElement:
// 1º type of element
// 2º attributes 
// 3º child element 
const title = React.createElement(
  'h1',   
  {
    id:'title',
    className:'header'
  },
  'Hello World'
)

// Put React element into the DOM
// Arguments of method ReactDOM.render
// 1º What do we want to render
// 2º Where do we want to render this
ReactDOM.render(
  title, 
  document.getElementById('root')
)