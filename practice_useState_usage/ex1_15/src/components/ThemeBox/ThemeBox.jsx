import { useEffect, useState } from "react";

function ThemeBox(){
    const [theme, setTheme] = useState('light');

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    useEffect(() =>{
        document.body.style.backgroundColor = theme === 'light' ? '#f0f0f0' : '#333';
        document.body.style.color = theme === 'light' ? '#333' : '#f0f0f0';
    }, [theme])
    return(
    <div>
        <h3>Ex6:</h3>
    <div style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      textAlign: 'center'
    }}>
      <h2>Current theme: {theme}</h2>
      <button onClick={handleChangeTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
    </div>

    );
}
export default ThemeBox;
