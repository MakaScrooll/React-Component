import React from "react";
import BackTop from "..";


export default function BackTopDemo() {
    return (
        <div>
            <p>滑动页面即可看到右下方的按钮</p>
            <BackTop right={100} bottom={200} scrollTop={100}>返回顶部</BackTop>
        </div>
    )
}
