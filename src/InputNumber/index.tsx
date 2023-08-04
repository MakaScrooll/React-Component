import React, { FC, memo, useState, useRef, useEffect } from 'react';
import { InputNumberProps } from './interface';
import Css from './InputNumber.module.less'
const InputNumber: FC<InputNumberProps> = memo((props) => {

    const { max, min, step, disabled, precision } = props

    let [count, setCount] = useState(1);

    // 更新计数
    const updateCount = (event: any) => {
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue)) {
            setCount(newValue);
        }
    };

    const add = () => {
        setCount(prevState => typeof prevState === 'number' ? prevState + (step || 1) : 1);
    };

    let del = () => {
        setCount(prevState => typeof prevState === 'number' ? prevState - (step || 1) : 1);
    }

    return (

        <div className={disabled ? Css.BgInputNumberBox : Css.InputNumberBox}>
            <button disabled={disabled || count >= max} style={{ cursor: count >= max ? 'not-allowed' : '' }} className={Css.add} onClick={add}>+</ button>
            <input type="text" value={precision ? count.toFixed(precision) : count} onChange={updateCount} onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                    e.preventDefault();
                    setCount('');
                }
            }}
            />
            <button className={count === 1 ? `${Css.active}` : `${Css.del}`} disabled={count === 1 || disabled === true || count <= min} style={{ cursor: count <= min ? 'not-allowed' : '' }} onClick={del}>-</ button>
        </div >
    )
})


export default InputNumber