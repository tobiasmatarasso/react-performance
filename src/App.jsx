import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// COMPONENTS
import Header from './header'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  // Estas dos vuelven a crear la función cada vez que detectan un cambio en su estado
  const addOne = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const addOne2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  // Para funciones grandes, quedan congeladas y su useState trae dinamicamente su estado
  const addOne3 = useCallback(() => {
    setCount3(actualCount => actualCount + 1)
  }, [])

  console.log('------------------')

  return (
    <div className="App">
      <Header />

      <div className="row">
        <Counter title={'1'} count={count} action={addOne} />
        <Counter title={'2'} count={count2} action={addOne2} />
        <Counter title={'3'} count={count3} action={addOne3} />
      </div>
    </div>
  )
}

export default App
