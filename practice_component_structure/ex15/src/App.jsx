
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import MainPanel from './components/MainPanel/MainPanel';
import UserSummary from './components/UserSummary/UserSummary';
function App(){
  return(
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px' }}>
          <MainPanel />
          <UserSummary />
        </div>
      </div>
      <Footer />
    </div>
   
  
  );
}
export default App;