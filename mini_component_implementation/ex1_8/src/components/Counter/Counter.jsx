import { useState } from "react"
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import styles from './Counter.module.css'
function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }
    const handleDecrement = () => {
        setCount(prevValue => prevValue - 1)
    }

    return(
        <div className={styles.buttonClick}>
            <h3>Ex2: Build a `Counter` component</h3>
             <button className={styles.inBtn} onClick={handleIncrement}><PlusSquareOutlined /></button>
             <button className={styles.deBtn} onClick={handleDecrement}><MinusSquareOutlined /></button> <span>{count}</span>

        </div>
       
    );
}
export default Counter;