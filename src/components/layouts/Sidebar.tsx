
import { NavLink } from "react-router-dom";
import { AiFillAppstore,AiOutlineTable } from "react-icons/ai";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
interface LinkTypes {
  label: string,
  path:string,
  icon:any
}
function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
const links : Array<LinkTypes> = [
  {
    label: "Dashboard",
    icon: <AiFillAppstore/>,
    path:"/"
  },
  {
    label: "Table",
    icon:<AiOutlineTable/>,
    path:"/table"
  }
]
  return (
    <aside className={` w-60 p-2 bg-white h-screen shadow-md z-40 lg:static absolute top-0 left-0 transition all duration-300 ${sidebarOpen ? ' translate-x-0 ' : ' -translate-x-full '} 2xl:translate-x-0 xl:translate-x-0 lg:translate-x-0`}>
      <div className="flex items-center justify-center h-20 border-b">
        <NavLink to="/">
          <h1 className='text-center font-extrabold text-4xl py-16'>Marvel</h1>
          {/* <Image height={150} width={250} priority src={"/images/print.jpg"} alt="Logo" /> */}
        </NavLink>

        <button

          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* Navlink Start */}
      <div className="flex flex-col space-y-2 p-2">

      {
       links.map((link:LinkTypes,ind:number)=>(
          <NavLink to={link.path} key={ind}  className={({isActive}:any) => ( isActive ? " bg-gray-500 hover:bg-gray-500 text-white " : '')   + " flex group space-x-2  items-center justify-start hover:text-white hover:bg-gray-400 transition-all duration-300 p-2 rounded-lg"}>
            <span className="p-2  shadow-md font-semibold text-bold">{link.icon}</span>
            <span>{link.label}</span>
            </NavLink>
          ))
          
        }
        </div>
      {/* Navlink End */}
    </aside>
  )
}

export default Sidebar