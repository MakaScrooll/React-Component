import React, { FC, useState, useMemo } from 'react';

import Css from './Switch.module.less'

import { SwitchProps } from './interface';

const Switch: FC<SwitchProps> = (props) => {

    const { disabled, children, falg, leftText, rightText } = props;

    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            {
                falg ? isChecked ? null : <div className={Css.Tar}>{children ? children : '标签'}</div> : null
            }

            <div style={{ display: 'flex', alignItems: 'center' }}>
                {
                    leftText ? <div className={isChecked ? '' : Css.active} style={{ marginRight: '10px' }} >{leftText}</div> : null
                }
                <label className={Css.switch}>
                    <input type='checkbox' checked={isChecked} onChange={handleChange} disabled={disabled ? true : false} />
                    <span className={Css.slider} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}></span>
                </label>
                {
                    rightText ? <div className={isChecked ? Css.inactive : ''} style={{ marginLeft: '10px' }}>{rightText}</div> : null
                }


            </div>


        </>

    )

}


export default Switch;