import Welcome from './components/Welcome/Welcome';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrimaryButton from './components/PrimaryButton/PrimaryButton';
import SecondaryButton from './components/SecondaryButton/SecondaryButton';
import DangerButton from './components/DangerButton/DangerButton';

function App(){
  return(
    <div>
      <Header/>
      <Welcome/>
      <HelloWorld/>
         <div
          style={{
            display: 'flex',
            justifyContent: 'center', 
            gap: '15px', 
            marginTop: '30px' 
          }}>
            <PrimaryButton />
            <SecondaryButton />
            <DangerButton />
    </div>
      <Footer/>
    </div>
  
  );
}
export default App;