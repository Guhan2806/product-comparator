import './App.css'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import {Feedback} from './pages/Feedback'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import  {faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
          <header>
            <h1>Product Comparator</h1>
          </header>
          <hr/>
          <BrowserRouter >
          <div className='nav'>
          <Link to="/">Home</Link>
            <form action="/result" method='POST'>
            <input type='text' name='search' id='search' placeholder='Enter the product'></input>
            <button type='submit'className='btn'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
          </div>
          <Routes>
            <Route path="/"/>
          </Routes>
          </BrowserRouter>
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