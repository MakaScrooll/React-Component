export interface InputNumberProps {
   /**
      * @description 显示的数值
      * @default 0
      */
   value?: Number

   /**
      * @description 最大值
      * @default --
      */
   max?: any

   /**
     * @description 最小值
     * @default --
     */
   min?: any

   /**
    * @description 计数器步长
    * @default --
    */
   step?: any

   /**
    * @description 是否禁用计数器
    * @default false
    */
   disabled?: boolean

   /**
    * @description 输入框默认 placeholder	
    * @default --
    */
   placeholder?: string
   /**
     * @description 精度计数器	
    * @default --
    */
   precision?: any
}