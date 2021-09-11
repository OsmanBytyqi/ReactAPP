import './App.css';

function App() {

  const title="My component";
  //we use dynamic values in template just for string and number, for object and boolean values we cant

  const number=10;
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{number}</p>
        <p>{'hello there '}</p>
      </div>

     
    </div>
  );
}

export default App;