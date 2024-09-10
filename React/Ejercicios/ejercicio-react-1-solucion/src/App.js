import './App.css';
import { Contact } from './model/contact';
import ComponentA from './components/componentA';

function App() {

  const contactTest = new Contact('Cristobal', 'Olvera', 'colvera@gmail.com', true);

  return (
    <div className="App">
      <header className="App-header">

        <ComponentA contact={contactTest} />
        
        
      </header>
    </div>
  );
}

export default App;
