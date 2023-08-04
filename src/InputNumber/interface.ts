export interface InputNumberProps {
   /**
      * @description 显示的数值
      * @default 0
      */
   value?: Number

   /**
      * @description 最大值
      * @default 10
      */
   max?: any

   /**
     * @description 最小值
     * @default 1
     */
   min?: any

   /**
    * @description 计数器步长
    * @default 2
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
    * @default 0.1
    */
   precision?: any
   
}