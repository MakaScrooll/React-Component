import React, { FC, useMemo } from 'react';

import './Link.module.less'
import { LinkProps } from './interface';

const Link: FC<LinkProps> = (props) => {
    const { type, disabled, children, underline } = props


    const linkStyle = useMemo(() => {
        if (!type && type !== 'danger' && type !== 'warning' && type !== 'success' && type !== 'primary' && type !== 'info' && type !== "unline") {
            return 'default';
        }
        return type as any;
    }, [type]);



    return (
        <div className="link">
            {
                underline ? <a href={underline ? 'javascript: void (0)' : '#'} style={{ textDecoration: underline ? 'none' : 'underline' }}>{children ? children : '默认链接'}</a> : <a href={disabled ? 'javascript: void (0)' : '#'} className={linkStyle} style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}> {children ? children : '默认链接'} </a>
            }

        </div >
    );

}

export default Link