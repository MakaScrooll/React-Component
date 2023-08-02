import React, { FC, useState } from 'react';
import Css from './MessageBox.module.less'
import MessageBoxProps from './interface';
const MessageBox: FC<MessageBoxProps> = (props) => {
    let { text, title, context } = props

    const [flag, setFlag] = useState(false)

    const handler = () => {
        setFlag(prevState => !prevState)
    }
    return (
        <>
            <div className={Css.MessageBox} onClick={handler}>
                <div>
                    {text ? text : '点击出现弹框'}
                </div>
            </div>
            {
                flag ? (<div className={Css.mask}>
                    <div className={Css.maskBox}>
                        <div className={Css.title}>
                            <div className={Css.left} >
                                {title ? title : '我是一个标题'}
                            </div>
                            <div className={Css.right} onClick={handler} >x</div>
                        </div>
                        <p className={Css.text}>
                            {context ? context : '我是一段内容'}
                        </p>
                        <button className={Css.btnBox} onClick={handler} >确认</button>

                    </div>
                </div>) : null
            }
        </>

    )
}

export default MessageBox