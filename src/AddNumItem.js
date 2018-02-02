import React from 'react'
export const AddNumItem = ( {addNum, value, onChange} ) => {
  let inputRef;

  return (
    <div>
      <input
        value={value}
        onChange={e => { onChange(Number(e.target.value)) }}
      />
      <button onClick={e => {
        e.preventDefault()
        addNum(value)
      }}>
        +
      </button>
    </div>
  )
}
