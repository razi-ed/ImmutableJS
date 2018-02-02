import React from 'react'
import 'immutable'
//incNum, decNum, key, removeNumItem, itemkey ,
export const NumListItem = ({num}) => {

  let numItem;

  return (
    <tr>
      <th>
        <p ref={node => { numItem = node }}>
          {num}
        </p>
      </th>
      <td>
        <button onClick={() => {
          incNum(numItem.value)
          numItem.value = ''
        }}>
          +
      </button>
      </td>
      <td>
        <button onClick={() => {
          decNum(numItem.value)
          numItem.value = ''
        }}>
          -
      </button>
      </td>
      <td>
        <button onClick={() => {
          removeNumItem(key)
          numItem.value = ''
        }}>
          -
      </button>
      </td>
    </tr>

  )
}

