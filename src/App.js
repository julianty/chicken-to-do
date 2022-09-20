import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  const style = {
    display: 'grid',
    gridTemplateRows: '5% auto',
    gridTemplateColumns: '5% auto',
    backgroundColor: '#eeeeee',
    height: '100vh'
  }
  return (
    <div style={style}>
      <Header />
      <Sidebar />

    </div>
  );
}

export default App;
