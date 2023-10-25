import React, { useState } from 'react'
import TodoDataInput from './TodoDataInput'
import TodoDataList from './TodoDataList'

const TodoApp = () => {
  const [dataArray,setDataArray]=useState([])

  const handleNewDataAdd = (newData) => {
    if(newData)
    setDataArray([...dataArray,newData])
  }
  const handleNewDataDelete = (newDatas) => {
    setDataArray(newDatas)
  }
  return (
    <div>
      <h1>TodoApp</h1>
      <TodoDataInput addValue={handleNewDataAdd} />
      <TodoDataList deleteValue={handleNewDataDelete} dataArray={dataArray}/>
    </div>
  )
}

export default TodoApp;