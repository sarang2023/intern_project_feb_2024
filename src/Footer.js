import { Link } from "react-router-dom";

function Footer()
{
    return(<div className="bg-dark text-light">
    <div class="container-fluid text-center">
  <div class="row align-items-start">
    <div class="col">
    <hr class="border border-light border-1 opacity-50"></hr>
    </div>
    <div class="col">
    <a className="text-decoration-none " href="#">
            <p className="h4 text-light">
              <span className="span">F</span>est
              <span><i className="bi bi-lightning color span"></i></span>
              <i className="fa-sharp fa-solid fa-u text-danger "></i>p
            </p>
          </a>
    </div>
    <div class="col">
    <hr class="border border-light border-1 opacity-50"></hr>
    </div>
  </div>
  <div class="card bg-transparent border border-0">
 
  <div class="card-body">
  <div class="d-flex flex-row mb-3 text-light justify-content-center ">
  <div class="p-2 fs-1"> <i class="fa-brands fa-x-twitter"></i></div>
  <div class="p-2 fs-1"><i class="fa-brands fa-facebook text-primary"></i></div>
  <div class="p-2 fs-1"><i class="fa-brands fa-linkedin text-primary"></i></div>
  <div class="p-2 fs-1"><i class="fa-brands fa-pinterest text-danger"></i></div>
  <div class="p-2 fs-1"><i class="fa-brands fa-whatsapp text-success"></i></div>
  <div class="p-2 fs-1"><i class="fa-brands fa-instagram"></i></div>
</div>
  </div>
</div>
<div class="card bg-transparent border border-0 ">
 
  <div class="card-body ">



  <div class="row">
  <div class="col-sm-6 mb-sm-0 ">
    <div class="card border border-0 bg-transparent">
      <div class="card-body ">
      <div class="d-flex flex-row justify-content-around">
<div class="px-2"><p><Link to="eventdetail1" class="link-underline-primary text-light">Artist</Link></p></div>
  <div class="px-2"><p><Link to="profile1" class="link-underline-primary text-light">Profile</Link></p></div>
  <div class="px-2"><p><Link to="profile2" class="link-underline-primary text-light">Festival</Link></p></div>
 
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card border border-0 bg-transparent">
      <div class="card-body">
      <div class="d-flex flex-row justify-content-around">
  <div class="px-2"> <p><Link to="profile4" class="link-underline-primary text-light">About</Link></p></div>
  <div class="px-2"> <p><Link to="eventdetail" class="link-underline-primary text-light">Event</Link></p></div>
  <div class="px-2"> <p><Link to="ticket01" class="link-underline-primary text-light">Tickets</Link></p></div>

</div>
      </div>
    </div>
  </div>
</div>
 

  
  </div>
<hr class="border border-light border-1 "></hr>
</div>
<div class="container-fluid">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-transparent border border-0">
  
  <div class="card-body ">
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card text-start bg-transparent border border-0">
      <div class="card-body ">
        <h6 class="card-title "><a class="text-decoration-none text-light" href="#"><span>Privacy Policy</span>&nbsp; <span>Refund Policy</span>&nbsp; <span>Shipping Policy</span>&nbsp;<span className=""><Link to="terms"> Terms of Service</Link></span> </a></h6>
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-transparent text-light border border-0">
      <div class="card-body">
        <h6 class="card-title">@FestUp Designed & Developed by PSYBUG</h6>
       
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    </div>
    
  </div>
</div>
</div>
    </div>)
}
export default Footer;