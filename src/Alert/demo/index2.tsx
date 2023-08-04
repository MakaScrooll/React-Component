import React from 'react'
import Alert from '..'
export default function AlertDemo() {
    return (
        <div>
            <Alert type='Success' LimeGreen={'red'} title='成功提示的文案'></Alert>
            <Alert type='Info' Goldenrod={'goldenrod'} title='消息提示的文案'></Alert>
            <Alert type='Warning' CoolGray={'gray'} title='警告提示的文案'></Alert>
            <Alert type='error' Coral={'coral'} title='失败提示的文案'></Alert>
        </div>
    )
}
