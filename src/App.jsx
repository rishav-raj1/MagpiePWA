import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfiniteScrollExample1 from './InfiniteScrollExample1'
import BackendData from './BackendData'
import { MantineProvider } from '@mantine/core';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MantineProvider>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>PWA</h1>

      <BackendData />

      {/* <InfiniteScrollExample1 /> */}

      </MantineProvider>
     
    </>
  )
}

export default App
