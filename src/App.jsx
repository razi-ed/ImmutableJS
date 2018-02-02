import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, merge, set, filter, remove, List } from 'immutable'
import { Title } from './Title'
import { AddNumItem } from './AddNumItem'
// import {NumListItem} from './NumListItem'
// import {NumList} from './NumList'

//incNum, decNum, key, removeNumItem, itemkey ,
const NumListItem = ({ num, index, modifyNumber, removeNumItem }) => {
  return (
    <tr>
      <td>
          {num}
      </td>
      <td>
        <button onClick={() => {
          modifyNumber(index,1)
        }}>
          +
      </button>
      </td>
      <td>
        <button onClick={() => {
          modifyNumber(index,-1)
        }}>
          -
      </button>
      </td>
      <td>
        <button onClick={() => {
          removeNumItem(index)
        }}>
          x
      </button>
      </td>
    </tr>

  )
}
// , removeNumber, increaseNumber, decreaseNumber 
const NumList = ({ nums, modifyNumber, removeNumber }) => {
  // Map through the todos
  let numItemNodes = nums.map((num,i) => {
    return (<NumListItem num={num} index={i} modifyNumber={modifyNumber}/>)
  })
  /*key={}
  removeNumItem={removeNumber}
  incNum={increaseNumber}
  decNum={decreaseNumber}*/


  return (<table><tbody>{numItemNodes}</tbody></table>);
}


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: Map({ items: List() })
    }

  }
  addNumber = (value) => {
    this.setState(({ data }) => ({
      input: '',
      data: data.update('items', list => list.push(value))
    }))
  }

  modifyNumber = (key, value) => {
  
    this.setState(({ data }) => ({
      data: data.update('items', list => {
        return list.update(key, v => v + value)
      })
    }))
  }
  removeNumber = (key, prevState) => {
    this.setState(remove(prevState, key))
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state, 2, 2)}</pre>
        <Title />
        <AddNumItem
          value={this.state.input}
          onChange={input => this.setState({ input })}
          addNum={this.addNumber}
        />
        <NumList
          nums={this.state.data.get('items')}
          modifyNumber={this.modifyNumber}
          removeNumber={this.removeNumber}
        />
      </div>
    );
  }
}

export default App