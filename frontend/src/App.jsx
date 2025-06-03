import './App.css'

function App() {
  return (
    <>
      <AnotherFun  text="my_mom.jpeg"/>
      <AnotherFun  text="its twitter not X :/"/>
    </>
  );
}

function AnotherFun({text}){
  return(
    <div>
      <p>{text}</p>
    </div>
  );
}

export default App;
