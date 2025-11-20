import { BrowserRouter as Router, Routes, Route} from "react-router"

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<h1>Welcome</h1>}/>
         <Route path="/home" element={<h1>Welcome to hompage</h1>}/>
       </Routes>
    </Router>
  )
}

export default App
