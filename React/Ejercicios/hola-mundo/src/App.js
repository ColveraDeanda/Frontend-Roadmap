import logo from './logo.svg';
import './App.css'; // ? Si el componente hijo no tiene hoja de estilos, se le heredarán los estilos del padre.
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';

/* Componente de tipo función. */
function App() {
  let myFullName = 'Cristobal Olvera Deanda';
  let number = 1000;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente Greeting aninado dentro del componente App. */}
        {/*<Greeting name={myFullName} number={number}></Greeting>*/}
        {/*<GreetingF name={myFullName} number={number}></GreetingF>*/}
        {/* <TaskComponent></TaskComponent> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de usos de hooks */}
        {/* <Ejemplo1></Ejemplo1>  */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="iStrikerbot">
          <div className='container'>
              <h6>Container Children...</h6>
          </div>
        </Ejemplo4> */}
       {/*  <DidMountClass></DidMountClass>
        <DidMountHook></DidMountHook> */}
        <GreetingStyled name={myFullName}></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
