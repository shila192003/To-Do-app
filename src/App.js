import logo from './logo.svg';
import './App.css';

import asset from './asset/images2.jpeg';
import TodoList from './component/TodoList';
function App() {
 /*{
  const myStyle={ 
    backgroundImage:`url(${asset})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  }
    
  };
  return (
    <div className="App" {style={myStyle}}>
      <TodoList/>
      
    </div>
  );*/

  return(
    <div>
    <TodoList />
    </div>
  );
}

export default App;
