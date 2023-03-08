import { Link } from "react-router-dom"

export const NavBar = () => {
  return <nav>
    <Link to="/">Decorations</Link>
    <Link to="/form">Create a new Item</Link>
    <Link to="/category/1">Wall Art</Link>
  </nav>
}
