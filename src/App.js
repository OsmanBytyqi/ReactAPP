import Navbar from './Navbar';
import Home from './home';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetail';
import NotFound from './NotFound';



function App() {

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route  exact path="/">
        <Home></Home>
        </Route>
        <Route  exact path="/create">
          <Create></Create>
       
        </Route>
        <Route  exact path="/blogs/:id">
          <BlogDetails></BlogDetails>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
        

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;