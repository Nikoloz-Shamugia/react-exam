import { Link } from "react-router-dom"
import DarkModeToggle from "./ToggleButton"

const Header = () =>{
    return(
        <header>
            <ul>
                <li>
                    <Link  to='/todo'>our company</Link>
                    <Link  to='/card'>locations</Link>
                    <Link  to='/data'>locations</Link>
                </li>
                <DarkModeToggle/>
            </ul>

        </header>
    )
}
export default Header
