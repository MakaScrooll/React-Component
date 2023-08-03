import React from "react";

import Button from "..";


export default function ButtonDemo4() {
    const onAlert = () => {
        alert('你好啊！')
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type="primary" width={100} height={50} handleClick={onAlert}>
                点击提示按钮
            </Button>
        </div >
    );
}