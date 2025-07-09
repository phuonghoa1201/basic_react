import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import StaticCard from './components/StaticCard/StaticCard';
import CardGrid from './components/CardGrid/CardGrid';
import Gallery from './components/Gallery/Gallery';
function App(){
  return(
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <MainContent />
        {/* <Gallery/> */}
    
      </div>
      <Footer />
    </div>
   
  
  );
}
export default App;