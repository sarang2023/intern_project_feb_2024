import { Link } from "react-router-dom";

function Header()
{
    return(<>
    <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand text-center mx-auto p-1" href="#">
            <p className="h4 text-light">
              <span className="span">F</span>est
              <span><i className="bi bi-lightning color span"></i></span>
              <i className="fa-sharp fa-solid fa-u text-danger "></i>p
            </p>
          </a>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

          
            
            <ul class="nav mx-2">
  <li class="nav-item ">
    <Link to="home" class="nav-link text-light" aria-current="page" >Home</Link>
  </li>
  <li class="nav-item">
    <Link to="eventdetail2" class="nav-link text-light" >Events</Link>
  </li>
  <li class="nav-item">
    <Link to='profile3' class="nav-link text-light" >List Your Event</Link>
  </li>
  </ul>


           

             
            </ul>
           
            <form className="d-flex flex-column flex-lg-row align-items-center" role="search">
              
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  

  <div class="btn-group" role="group">
    <button type="button" class="btn btn-dark rounded-5 mb-2 mb-lg-0 mx-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <i className="bi bi-geo-alt"></i>
      Indore
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
</div>
             
             
             
          
            </form>
          </div>
          <a className="navbar-brand text-center mx-auto" href="#">
          <button type="button" className="btn btn-dark rounded-circle ">
                <i className="fa-solid fa-user"></i>
              </button>
          </a>

          
        </div>
      </nav>







    
    </>)
}
export default Header;