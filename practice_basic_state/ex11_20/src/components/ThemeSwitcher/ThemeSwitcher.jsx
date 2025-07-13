import { useState } from "react";
function ThemeSwitcher(){

    const [currentTheme, setCurrentTheme] = useState('light');

    const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  
  }
    return(
    <div style={{ 
      padding: '20px', 
      backgroundColor: currentTheme === 'light' ? '#fff' : '#333',
      color: currentTheme === 'light' ? '#000' : '#fff',
      textAlign: 'center'
    }}>
      <h2>Current theme: {currentTheme}</h2>
      <button onClick={toggleTheme}>
        Switch to {currentTheme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>

    );

}
export default ThemeSwitcher;


