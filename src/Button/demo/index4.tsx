import React from "react";

import Button from "..";


export default function ButtonDemo4() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type="primary" width={100} height={50} loading={true}>
                加载按钮
            </Button>
            <Button type="warning" width={100} height={50} loading={true}>
                加载按钮
            </Button>
        </div >
    );
}