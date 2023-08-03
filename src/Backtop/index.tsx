import React, { useMemo, FC, memo, useState, useEffect } from 'react';

import Css from './backTop.module.less'
import { BackTopProps } from './interface';

const BackTop: FC<BackTopProps> = (props) => {

    let { width, height, right, bottom, scrollTop, children, next } = props
    let [flag, setFlag] = useState(false)
    let style = {
        right: right + 'px',
        bottom: bottom + 'px',
        width: width + 'px',
        height: height + 'px'
    }
    const onScroll = () => {
        let h = document.documentElement.scrollTop
        if (h > scrollTop) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            // 销毁钩子
            window.removeEventListener('scroll', onScroll)
        }
    }, [])


    return (
        <>
            {
                next ? <div
                    className={[Css.backTop, flag ? Css.show : Css.hidden].join(' ')}
                    style={style}
                    onClick={() => width || height ? window.scrollTo({ top: 0, behavior: 'smooth' }) : alert('下一个可以点击回到顶部')}
                >
                    {children ? children : '返回顶部'}
                </div > : <div
                    className={[Css.backTop, flag ? Css.show : Css.hidden].join(' ')}
                    style={style}>
                    {children ? children : '返回顶部'}
                </div >
            }
        </>
    )
}

export default BackTop