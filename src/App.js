import React, {useState} from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Websites from './components/Websites';
import Contact from './components/Contact';
import Foot from './components/Foot';
import Resume from './components/Resume';
import Navlist from './components/navlist/Navlist'

function App() {
  const [ currentPage, handlePageChange] = useState('About')

  const renderPage = () => {
    switch(currentPage) {
      case 'Resume':
        return <Resume/>
     case 'Get in Touch':
        return <Contact/>;
      case 'Websites':
        return <Websites/>;
      case 'About' :
        return <About/>;
      default:
        return <About/>
    }
  }
  return (
    <div >
      <header className="header " >
        <Navbar></Navbar>
      </header>
      <Navlist currentPage={currentPage} handlePageChange={handlePageChange}></Navlist>
      <div class ="feather">
        {renderPage()}
         {/* <About></About>
         <Resume></Resume> 
         <Websites></Websites>
         <Contact></Contact> */}
         <br></br>
         <br></br>
         <br></br>
         <Foot></Foot>
      </div>
     
    </div>
  );
}

export default App;
