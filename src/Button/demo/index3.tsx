import React from "react";

import Button from "..";


export default function ButtonDemo3() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type="primary" width={80} height={50}>
                正常按钮
            </Button>
            <Button type="warning" width={80} height={50} disabled={true}>
                禁用按钮
            </Button>
        </div >
    );
}