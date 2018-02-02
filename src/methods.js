import React from 'react'
export const addNumber = (value, prevState = this.state) => {
  let key = Math.floor(Math.random() * Math.floor(100000))
  let obj = Map()
  obj[key] = value
  let newState = prevState.merge(obj)
  this.setState(newState)
}

export const increaseNumber = (key, prevState = this.state) => {
  let newState = prevState.set(key, (prevState[key]) + 1)
  this.setState(newState)
}

export const decreaseNumber = (key, prevState = this.state) => {
  let newState = prevState.set(key, (prevState[key]) - 1)
  this.setState(newState)
}

export const removeNumber = (key, prevState = this.state) => {
  let newState = prevState.filter((v, k) => k !== key)
  this.setState(newState)
}
module.exports={
  addNumber,increaseNumber,decreaseNumber,removeNumber
}