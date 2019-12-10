import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './style.css'

const App = props => {

    const [counter, setCounter] = useState(0) 

    const up = () => setCounter(counter + 1)
    const down = () => setCounter(counter - 1)

    return <div>
      <h1>{counter}</h1>
      <button onClick={down}>
        -
      </button>
      <button onClick={up}>
        +
      </button>
    </div>

}

ReactDOM.render(<App/>, document.querySelector('#root'))
