import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './component/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Lists />
      <Footer />
    </>
  )
}

export default App;
