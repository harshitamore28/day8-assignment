/*1
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
import Signin from './pages/signin-page/signin.component'

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Route path='/signin' component={Signin}/>
    </div>
  );
}

export default App;
*/

import logo from './logo.svg';
import './App.css';
import {Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
import Signin from './pages/signin-page/signin.component'
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={Signin} />
    </div>
  );
}
export default App;