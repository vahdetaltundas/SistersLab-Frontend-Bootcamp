import './App.css'
import modifiedDataSet from "./data"
import FirstComponent from './components/FirstComponent'

function App() {

  return (
    <>
      <div className='container'>
        <div className='row'>
        {modifiedDataSet.map((data,index)=>{
        return(
          <FirstComponent 
          title="Güncellenmiş Pokemon"
          data={data}
          text="Bu pokemon güçlenmiş"
          number={index} />
        )
      })}
        </div>
      </div>
    </>
  )
}

export default App
