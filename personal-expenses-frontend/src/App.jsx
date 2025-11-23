import { BrowserRouter as Router, Routes, Route} from "react-router"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<LandingPage/>}/>
         <Route path="/home" element={<h1>Welcome to hompage</h1>}/>
       </Routes>
    </Router>
  )
}

export default App
