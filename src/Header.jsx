import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg" >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        
          <a className="navbar-brand text-black" href="/">Captain's bLog</a>
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-black" type="submit">&#x1F50D;</button>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            </form>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-black" aria-current="page" href="/about">About</a>
                <a className="nav-link active text-black" aria-current="page" href="/">Home</a>
                <Link className="nav-link active text-black" to="/posts/new">Create new post</Link>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/signup">Signup</a></li>
                <li><a className="dropdown-item" href="/login">Login</a></li>            
                <li><hr className="dropdown-divider" /></li>
                <li><LogoutLink className="dropdown-item" /></li>
                </ul>
              </li>
            </ul>
           </div>
        </div>
      </nav>
    </nav>
  );
} 
          

