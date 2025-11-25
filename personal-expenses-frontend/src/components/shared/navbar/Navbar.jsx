import { ChartColumnBig, ChartLine, CircleDollarSign, ClipboardPlus, LayoutDashboard } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar"
import ProfileImg from "@/assets/img/profileImg.png";

const Navbar = () => {
    
const items = [
  {
    title: "Dashboard",
    url: "/overview",
    icon: LayoutDashboard,
  },
  {
    title: "Spending Insight",
    url: "#",
    icon: ChartLine,
  },
  {
    title: "Budget & Goals",
    url: "#",
    icon: CircleDollarSign,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartColumnBig,
  },
  {
    title: "Reports",
    url: "#",
    icon: ClipboardPlus,
  },
]

  return (
    <Sidebar>
      <SidebarHeader className="bg-gray-800 flex justify-center items-center py-4">
        <img src={ProfileImg} alt="" className="w-20"></img>
        <h2 className="text-base text-gray-400 font-bold">Ada Lama</h2>
      </SidebarHeader>
      <SidebarContent className="bg-gray-800">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-base font-normal text-gray-200 hover:bg-gray-700 hover:text-cyan-100" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default Navbar