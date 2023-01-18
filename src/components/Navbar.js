import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title"> Kavlium ❤️</Link>
      <div>
        <Link to="/1">Contacts</Link>
        <Link to="/2">Registration Form</Link>
        </div>
    </nav>
  )
}