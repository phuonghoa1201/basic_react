import ColorSplash from "./components/ColorSplash/ColorSplash.jsx";
import CountDisplay from "./components/CountDisplay/CountDisplay.jsx";
import Farawell from "./components/Farawell/Farawell.jsx";
import MirrorInputs from "./components/MirrorInputs/MirrorInputs.jsx";
import MountNotice from "./components/MountNotice/MountNotice.jsx";
import MousePosition from "./components/MousePosition/MousePosition.jsx";
import PageTitle from "./components/PageTitle/PageTitle.jsx";
import SessionEnd from "./components/SessionEnd/SessionEnd.jsx";
import Stopwatch from "./components/Stopwatch/Stopwatch.jsx";
import ThemeBox from "./components/ThemeBox/ThemeBox.jsx";
import UnmountTracker from "./components/UnmountedTracker/UnmountedTracker.jsx";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage.jsx";
import { useState } from "react";
import WindowDimemsions from "./components/WindowDimensions/WindowDimensions.jsx";
import KeyDisplays from "./components/KeyDisplays/KeyDisplays.jsx";
import ColorFlasher from "./components/ColorFlasher/ColorFlasher.jsx";
function App(){
   const [show, setShow] = useState(true);
  
      const toggleStopwatch = ()=>{
          setShow(prevToggle => !prevToggle);
  
      }
  return (
    <div>
      <WelcomeMessage/>
      <ColorSplash/>
      <MountNotice/>
      <PageTitle/>
      <CountDisplay/>
      <ThemeBox/>
      <MirrorInputs/>
      <Farawell/>
      <UnmountTracker/>
      <SessionEnd/>
      <div>
         {show && <Stopwatch/>}
          <button onClick={toggleStopwatch}>{show === true ? 'OFF' : 'ON'}</button>
      </div>
      <MousePosition/>
      <WindowDimemsions/>
      <KeyDisplays/>
      <ColorFlasher/>

    </div>
  );
}
export default App;