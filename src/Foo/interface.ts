export interface SwitchProps {

  /**
    * @description 按钮主题
    * @default switch
    */
  type?: String;
  /**
    * @description 禁用状态
    * @default false
    */
  disabled?: Boolean;
  /**
    * @description 标签状态
    * @default false
    */
  falg?: Boolean;
  /**
    * @description 标签文本
    * @default 标签
   */
  children?: any;

  /**
    * @description 开关文字描述
    * @default 文本1
   */
  leftText?: string

  /**
   * @description 开关文字描述
   * @default 文本2
  */
  rightText?: string
}

export interface SwitchStyle {
  type?: String;
  disabled?: Boolean;
}

export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
