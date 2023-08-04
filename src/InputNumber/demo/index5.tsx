import React from 'react'
import InputNumber from '..'
export default function InputNumberDemo() {
    return (
        <div>
            <InputNumber max={10} min={1} step={2}></InputNumber>
        </div>
    )
}