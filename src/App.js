import './App.css';
import './css/style.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Lending from './components/Lending';


function App() {
  /* <div className='wrapper'>
          <div className='lending__content'>
            <LendingHeader></LendingHeader>
            <LendingHome></LendingHome>
            <LendingAboutUs></LendingAboutUs>
          </div>
      </div>
    */
    /*
        <Navbar/>
        <div className="App__content _container-app">
          <MainPage/>
        </div>
    */
  return (
    <div className="App">
      <Lending/>
    </div>
  );
}

export default App;
