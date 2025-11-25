import Navbar from "../../components/shared/navbar/Navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const Layout = ({children}) => {
  return (
    <SidebarProvider className="bg-gray-900">
      <Navbar/>
        <SidebarTrigger className="text-gray-100"/>
        {children}
    </SidebarProvider>
  )
}

export default Layout