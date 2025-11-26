import { BrowserRouter as Router, Routes, Route} from "react-router"
import LandingPage from "./pages/LandingPage"
import OverviewPage from "./pages/dashboard/overview/OverviewPage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<LandingPage/>}/>
         <Route path="/overview" element={<OverviewPage/>}/>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/register" element={<RegisterPage/>}/>
       </Routes>
       <Toaster richColors closeButton={true}/>
    </Router>
  )
}

export default App
