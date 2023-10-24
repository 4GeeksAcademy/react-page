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
          <div className='col-12 col-sm-3'>
            <TheCard
              TheTitle='Card 1'
              TheText='Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.'
              TheImage="https://images.unsplash.com/photo-1618886487325-f665032b6352?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" /></div>
          <div className='col-12 col-sm-3'>
            <TheCard
             TheTitle='Card 2'
             TheText='Duis aute irure dolor in Duis aute irure dolor in.'
             TheImage="https://images.unsplash.com/photo-1650173901755-ad5526ac8b51?auto=format&fit=crop&q=80&w=3863&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
          <div className='col-12 col-sm-3'>
            <TheCard
             TheTitle='Card 3'
             TheText='Excepteur sint occaecat cupidatat non proident'
             TheImage="https://images.unsplash.com/photo-1608665488977-b26949036f6e?auto=format&fit=crop&q=80&w=3876&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
          <div className='col-12 col-sm-3'>
            <TheCard
             TheTitle='Card 4'
             TheText='sunt in culpa qui officia deserunt mollit anim id est laborum.'
             TheImage="https://images.unsplash.com/photo-1490682143684-14369e18dce8?auto=format&fit=crop&q=80&w=3870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
        </div>
      </div>
      <TheFooter />
    </div>
  );
}

export default App;
