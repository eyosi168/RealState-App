import Navbar from "./components/navbar/Navbar"
import HomePage from "./components/routes/home/HomePage"
import "./layout.scss"

function App() {

  return (
    <div className="layout"> 
       <div className="navbar"><Navbar></Navbar></div> 
       <div className="content"><HomePage></HomePage></div>
    </div>
  )
}

export default App