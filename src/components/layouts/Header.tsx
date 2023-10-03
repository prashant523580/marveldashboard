import Search from "../Search";
import {AiOutlineMenu} from "react-icons/ai"

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  
  return (
    <header className="sticky top-0 z-999 flex space-x-2 w-full bg-white drop-shadow-lg shadow-lg p-6 dark:drop-shadow-none z-10">
      <button className="lg:hidden block p-1" onClick={() => props.setSidebarOpen(!props.sidebarOpen)}><AiOutlineMenu/></button>
        <Search/>
    </header>
  );
};

export default Header;
