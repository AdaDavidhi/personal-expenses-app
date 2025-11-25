import { BrowserRouter as Router, Routes, Route} from "react-router"
import LandingPage from "./pages/LandingPage"
import OverviewPage from "./pages/dashboard/overview/OverviewPage"
import LoginPage from "./pages/auth/LoginPage"

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<LandingPage/>}/>
         <Route path="/overview" element={<OverviewPage/>}/>
       </Routes>
    </Router>
  )
}

export default App
