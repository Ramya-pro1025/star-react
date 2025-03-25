import Navbar from './components/Navbar';
import AboutSection from './components/About';
import HomeSection from './components/Home';
import ConstellationLegendsSection from './components/Constellation';


function App()
{
    return(
        <div>
             <Navbar></Navbar>
             <HomeSection></HomeSection>
             <AboutSection></AboutSection>
             <ConstellationLegendsSection></ConstellationLegendsSection>
        </div>
    )
 
}
export default App