import './App.css'

function App() {
  return (
    <>
      <div>
        <p>Hello, world!</p>
      </div>
      <div>
        <p>Goodbye, world!</p>
      </div>
      <anotherFun />
    </>
  );
}

function anotherFun(){
  return(
    <div>
      <p>bottom text</p>
    </div>
  );
}

export default App
