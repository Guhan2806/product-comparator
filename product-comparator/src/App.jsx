import './App.css'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
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
          </Routes>
          </BrowserRouter>
          </QueryClientProvider>
          <br/>
          <footer>
            <BrowserRouter>
              <Link to="/Feedback">Feedback</Link>
              <Routes>
                <Route path="/Feedback" element={<Feedback/>}/>
              </Routes>
            </BrowserRouter>
          </footer>
    </div>
  );
}
export default App;