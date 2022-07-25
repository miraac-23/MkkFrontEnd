import './App.css';
import Navi from './layouts/Navi'
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard.jsx'
import { Menu,Container } from 'semantic-ui-react'


function App() {



  return (
    <div className="App">
   <Navi/>
   <Container className="main">
    <Dashboard/> 
   </Container>
        

    </div>
  );
}

export default App;
