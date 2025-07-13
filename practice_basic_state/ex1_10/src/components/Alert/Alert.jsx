
import { useState } from 'react';
import './Alert.css';
import { CheckCircleFilled, WarningFilled, ExclamationCircleFilled, InfoCircleFilled } from '@ant-design/icons';
function Alert({type, message}){

    const [visible, setVisible] = useState(true);

    let icon;
    if ( type === 'success') icon = <CheckCircleFilled/>
    else if ( type === 'error') icon = <ExclamationCircleFilled/>
    else if (type === 'warning') icon = <WarningFilled/>
    else if (type === 'info') icon = <InfoCircleFilled/>

   if(!message || !visible)
    return null;

   const word = message.split(' ');
   const firstWord = word[0];
   const restWord = word.slice(1).join(' ');


   const onClose = () => {
    setVisible(false)
   }

   return(
    <div className={`alert ${type}`}>
        <span className='icon'>{icon} </span> 
        <strong> {firstWord} </strong>
        {restWord && ' '} {restWord}
            <button className='btn-close' onClick={onClose}>&times;</button>
    </div>

   );

}
export default Alert;