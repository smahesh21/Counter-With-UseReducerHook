import Counter from './components/CounterWithUseReducer'

import './App.css'
import CounterTwo from './components/CouterTwoWithReducer'
import CounterThree from './components/CounterThreeWithReducer'

function App() {
  return (
    <div className="app">
      <Counter />
      <CounterTwo />
      <CounterThree />
    </div>
  )
}

export default App
