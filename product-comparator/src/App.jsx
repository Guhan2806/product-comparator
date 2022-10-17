import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Feedback} from './pages/Feedback'
import Result from './pages/Result'
import React from 'react'
import Home from './pages/Home'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
function App() {
  const client=new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:false}}})
  return (
    <div className="App">
          <header>
            <h1 className='title'>Product Comparator</h1>
          </header>
          <hr/>
          <QueryClientProvider client={client}>
          <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path="/Feedback" element={<Feedback/>}/>
          </Routes>
          </BrowserRouter>
          </QueryClientProvider>
    </div>
  );
}
export default App;