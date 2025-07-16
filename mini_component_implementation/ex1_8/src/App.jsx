import ColorPicker from "./components/ColorPicker/ColorPicker.jsx";
import Counter from "./components/Counter/Counter.jsx";
import InputDisplay from "./components/InputDisplay/InputDisplay.jsx";
import ToggleButton from "./components/ToggleButton/ToggleButton.jsx";
import Form from "./components/Form/Form.jsx";
import CheckBoxList from "./components/CheckBoxList/CheckBoxList.jsx";
import HoverBox from "./components/HoverBox/HoverBox.jsx";
import SearchFilter from "./components/SearchFilter/SearchFilter.jsx";
function App(){
  return(
    <div>
    <ToggleButton/>
    <Counter/>
    <InputDisplay/>
    <ColorPicker/>
    <Form/>
    <CheckBoxList/>
    <HoverBox/>
    <SearchFilter/>
    </div>

  );

}
export default App;