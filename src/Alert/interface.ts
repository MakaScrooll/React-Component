export interface AlertProps {
    title?: string
    /**
   * @description 按钮主题
   * @default primary
   */
    type?: String;
    /**
   * @description 是否禁用
   * @default false
   */
    closable?: boolean
     /**
   * @description 是否居中
   * @default false
   */
    center?: boolean
      /**
   * @description 自定义关闭文本
   * @default x
   */
    closeText?: string
       /**
   * @description 自定义主题颜色
   * @default limegreen
   */
    LimeGreen?: any
        /**
   * @description 自定义主题颜色
   * @default grey
   */
    CoolGray?: any
     /**
   * @description 自定义主题颜色
   * @default goldenrod
   */
    Goldenrod?: any
      /**
   * @description 自定义主题颜色
   * @default coral
   */
    Coral?: any
}