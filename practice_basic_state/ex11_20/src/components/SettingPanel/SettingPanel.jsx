

import DisplaySetting from "../DisplaySetting/DisplaySetting";


function SettingPanel({theme}){
    return(
        <div>
        <div>This is setting panel</div>
        <DisplaySetting theme ={theme} />
        </div>
    );
}
export default SettingPanel;