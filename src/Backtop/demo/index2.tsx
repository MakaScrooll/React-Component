import React from "react";
import BackTop from "..";


export default function BackTopDemo() {
    return (
        <div>
            <p>滑动页面即可看到右下方的按钮</p>
            <BackTop next={true} width={100} height={60} right={100} bottom={100} scrollTop={100}>返回顶部</BackTop>
        </div>
    )
}