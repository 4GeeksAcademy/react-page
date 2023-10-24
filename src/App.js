import './App.css';
import TheNavbar from './components/navbar';
import TheJumbotron from './components/jumbotron';
import TheCard from './components/card';
import TheFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <TheNavbar />
      <TheJumbotron />
      <div className='container flex justify-content-center'>
        <div className='row'>
          <div className='col-12 col-sm-3'><TheCard /></div>
          <div className='col-12 col-sm-3'><TheCard /></div>
          <div className='col-12 col-sm-3'><TheCard /></div>
          <div className='col-12 col-sm-3'><TheCard /></div>
        </div>
      </div>
      <TheFooter />
    </div>
  );
}

export default App;
