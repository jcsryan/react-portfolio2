import React, {useState} from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Websites from './components/Websites';
import Contact from './components/Contact';
import Foot from './components/Foot';
import Resume from './components/Resume';


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
     
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
      </header>
      <div class ="feather">
        {renderPage()}
         {/* <About></About>
         <Resume></Resume> 
         <Websites></Websites>
         <Contact></Contact> */}
         <Foot></Foot>
      </div>
     
    </div>
  );
}

export default App;
