export interface MessageBoxProps {
    /**
   * @description 点击文本
   * @default 点击出现弹框
   */
    text?: string

    /**
   * @description 标题文本
   * @default 我是一个标题
   */
    title?: string
    
    /**
  * @description 内容文本
  * @default 我是一段内容
  */
    context?: string
}

export default MessageBoxProps