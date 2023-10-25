import React from 'react'

const TodoDataList = ({dataArray,deleteValue}) => {
    const deleteData = (index) => {
        const updatedArray = dataArray.filter((data, i) => i !== index);
        deleteValue(updatedArray);
      };
  return (
    <div>
       <ul>
        {dataArray.map((data, index) => (
          <div>
            <li key={index}>{data}</li>
            <button onClick={()=>deleteData(index)} >Delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoDataList
