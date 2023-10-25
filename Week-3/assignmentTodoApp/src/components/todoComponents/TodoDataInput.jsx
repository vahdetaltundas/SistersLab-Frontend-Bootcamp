import React, { useState } from 'react'

const TodoDataInput = (props) => {
    const [data, setData] = useState('');

  const addData = () => {
    props.addValue(data); // Üst bileşene geri çağırma yapılır
  }

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
      <button onClick={addData}>Add</button>
      
    </div>
  );
}

export default TodoDataInput;
