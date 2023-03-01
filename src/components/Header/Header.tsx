import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <header className="flex justify-around items-center h-[50px] px-5 shadow-md bg-gray-600 text-white">
      <span>
        <Link to="/">PlanList</Link>
      </span>
      <span>
        <Link to="/home">Home</Link>
        <Link to="/settings"className="mx-2" >Settings</Link>
      </span>
    </header>
   );
}
 
export default Header;