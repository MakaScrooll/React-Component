import React from "react";
import Link from "..";
export default function LinkDemo() {
    return (
        <div style={{ display: 'flex' }}>
            <Link disabled={true}></Link>
            <Link disabled={true} type='primary'>主要链接</Link>
            <Link disabled={true} type='success'>成功链接</Link>
            <Link disabled={true} type='danger'>警告链接</Link>
            <Link disabled={true} type='warning'>危险链接</Link>
            <Link disabled={true} type='info'>信息链接</Link>
        </div>

    )
}