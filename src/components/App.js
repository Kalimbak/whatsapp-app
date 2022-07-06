import './App.css';
import SideBar from './side/sideComponent';
import Image from '../assets/images/image.jpeg'


function App() {
    return(
        <>
        <SideBar />
    
        <section  className="message-view">
        <div className="container">
            <div className="left">
               <img className="img" src={Image} alt="logo" width="25" height="25"/>
            </div>
            <div className="right">
                
                <span data-testid="menu" data-icon="menu" ><svg viewBox="0 0 24 24" width="24" height="24" ><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg></span>
            </div>
        </div>
        </section>
        </>
    );
}

export default App;