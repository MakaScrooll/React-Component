export interface BackTopProps {
    /**
    * @description 宽度
    * @default 100
    */
    width?: Number;
    /**
     * @description 高度
     * @default 60
     */
    height?: Number;
    /**
     * @description 距离右边
     * @default 100
     */
    right?: Number
    /**
    * @description 距离下边
    * @default 100
    */
    bottom?: Number
    /**
    * @description 控制显示返回顶部按钮触发
    * @default 1000
    */
    scrollTop?: any
    /**
   * @description 是否触发回到顶部事件
   * @default false
   */
    next?: Boolean
    children?: any

}