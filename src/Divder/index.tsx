import React, { Children, FC } from 'react';
export interface Iprops {
    /**
     * @description 标签文本
     * @default 分割线
     */
    text?: string
    /**
     * @description 组件内文字颜色
     * @default --
     */
    color?: string
    /**
     * @description 组件内分割线颜色
     * @default --
     */
    lineColor?: string
    /**
    * @description 文本两边的边距
    * @default --
    */
    margin?: string,
    /**
    * @description 显示多文本
    * @default false
    */
    show?: Boolean
}

const Divider: React.FC<Iprops> = ({
    text,
    color = '#e7cfcf',
    lineColor = '#e7cfcf',
    margin = '10px',
    show
}) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '30px 0'
    }}>

        <div style={{
            flexGrow: 1,
            borderBottom: `1px solid ${lineColor}`,
        }}></div>
        {
            show ? (<div style={{
                margin: `0 ${margin}`,
                color: color,
            }}>{text}</div>) : ''
        }

        <div style={{
            flexGrow: 1,
            borderBottom: `1px solid ${lineColor}`,
        }}></div>
    </div>
)

export default Divider
