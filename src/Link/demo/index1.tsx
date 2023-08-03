import React from "react";
import Link from "..";
export default function LinkDemo() {
    return (
        <div style={{ display: 'flex' }}>
            <Link></Link>
            <Link type='primary'>主要链接</Link>
            <Link type='success'>成功链接</Link>
            <Link type='danger'>警告链接</Link>
            <Link type='warning'>危险链接</Link>
            <Link type='info'>信息链接</Link>
        </div>

    )
}