import './App.css'
import Tree from './components/Tree'
import menus from './components/data.js'


function App() {

  return (
    <>
      <div className='wrapper'>
        <Tree menus={menus}/>
      </div>
    </>
  )
}

export default App
