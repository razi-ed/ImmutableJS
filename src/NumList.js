import React from 'react'
import {Map} from 'immutable'

import NumListItem from './NumListItem'

export const NumList = ({ numsMap, removeNumber, increaseNumber, decreaseNumber }) => {
  // Map through the todos
  const nums = Map(numsMap)
  let numItemNodes = nums.map((num) => {
    return (<NumListItem number={num} />)
  })
      /*key={}
      removeNumItem={removeNumber}
      incNum={increaseNumber}
      decNum={decreaseNumber}*/
    
  
  return (<table>{numItemNodes}</table>);
}
