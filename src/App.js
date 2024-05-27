import './App.css';

function App() {
  // const name = <h1>Threshi</h1>;
  // const age = <h2>20</h2>;
  // const email = <h3>threshi@gmail.com</h3>;
  // const user = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  //)

  //name in single quotes and number in {}
  return (
    <div className="App">
    <User name="andrea" age={20} email="andrea@gmail.com"/>
    <User name="gill" age={23} email="gill@gmail.com"/>
    <Job salary={20000} position="SDE" company="Amazon"/>
    <Job salary={30000} position="SDE" company="Google"/>
    </div>  //without initialling and declaring the variable and return the variable we can directly give the text between them.
  );
}

const User = (props) =>{
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h3>{props.email}</h3>
    </div>
  )
}

const Job = (props) =>{
  return(
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
    </div>
  )
}

export default App;
