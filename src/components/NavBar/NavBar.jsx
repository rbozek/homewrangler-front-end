// npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <div>Welcome, {user.name}</div>
          <div><NavLink to="/profiles">Profiles</NavLink></div>
          <div><NavLink to="/auth/change-password">Change Password</NavLink></div>
          <div><NavLink to="/auth/login">Log In</NavLink></div>
          <div><NavLink to="/auth/signup">Sign Up</NavLink></div>
          <div><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></div>
        </ul>
      :
        <ul>
          <li>how are you seeing this? leaving links for safety til later</li>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
