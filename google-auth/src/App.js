import logo from './logo.svg';
import './App.css';
import { fb_obj } from './Firebase/FirebaseConn';
import Login from './Component/Login';
import Signup from './Component/Signup';


function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
