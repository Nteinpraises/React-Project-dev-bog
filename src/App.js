import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const link = 'https://nteinpraises.versel.app/';


;
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
        <h1>{title}</h1>
        <a href={link}>my portfolio</a>
      </div>
    </div>
  );
}

export default App;
