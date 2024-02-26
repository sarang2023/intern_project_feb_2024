function Profilepage1()
{
    return(<>
   <div class="container-fluid text-center bg-dark text-light">
  <div class="row align-items-start ">
    <div class="col">
    <div class="card container-fluid bg-transparent text-light border border-0"style={{"height":"170px"}}>
    <div class="card-body">
    <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle border border-3 border-black" alt="..." style={{"width": "200px", "height": "200px","marginTop":"65px"}}/>
  </div>
</div>
       </div>
    
    
  </div>
  
</div>
<div class="container-fluid text-center text-light bg-black bg-opacity-75">
  <div class="row align-items-start">
    <div class="col">
    <div class="card mt-5 bg-transparent text-light p-5 border border-0"style={{"height":"200px"}} >
  <div class="card-body">
    <h3 class="card-title fw-bold fs-1">Samay Raina</h3>
    <h6 class="card-subtitle mb-2  fs-5">samayraina123@gmail.com</h6>
    
  </div>
</div>
    </div>
    
  </div>
  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      
    <div class="card bg-transparent border border-0">
  <div class="card-body mx-auto ">
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-2">
          <a class="nav-link active text-light fw-bold fs-4" aria-current="page" href="#">Edit Profile</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-light fw-bold fs-4" href="#">Tickets</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-light fw-bold fs-4" href="#">Passes</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-light fw-bold fs-4" href="#">Wallet</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-light fw-bold fs-4" href="#">Favourites</a>
        </li>
        <li class="nav-item mx-2">
        <button class="btn btn-outline-success text-light border fw-bold fs-4" type="submit"style={{"backgroundColor":"blueviolet"}}>Sign Out</button>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
<hr class="border border-light border-2 opacity-50"></hr>
  </div>
</div>
    </div>
    
  </div>
</div>

</div>




<div class="container-fluid bg-dark text-light ">
  <div class="row align-items-start ">
    <div class="col">
    <div class="card container mt-5 bg-transparent text-light border border-0 mb-5">
  <div class="card-header border border-0">
    Please update your account details below
  </div>
  <div class="card-body">
  <form class="row g-3">
  <div class="col-md-6">
 
    <input type="text" class="form-control form-control-lg bg-dark" id="inputEmail4"placeholder="Samay raina"/>
  </div>
  <div class="col-md-6">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputPassword4"placeholder="raina"/>
  </div>
  <div class="col-12">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputAddress" placeholder="Phone Number"/>
  </div>
 
  
  
  
 
        
<h5 class="card-title">Delivery Details</h5>
    <h6 class="card-subtitle mb-2">These details will be used to send physical tickets</h6>

    <div class="col-12">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputAddress" placeholder="Address 1"/>
  </div>
    <div class="col-12">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputAddress" placeholder="Address 2"/>
  </div>

  <div class="col-md-6">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputPassword4"placeholder="Landmark"/>
  </div>
  <div class="col-md-6">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputPassword4"placeholder="City"/>
  </div>
  <div class="col-md-6">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputPassword4"placeholder="Pincode"/>
  </div>
  <div class="col-md-6">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputPassword4"placeholder="State"/>
  </div>

  <div class="col-md-6">

  <h5 class="card-title">Address Type*</h5>
  </div>
  <div class="col-md-6">
    
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Residential</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Business</label>
</div>

  </div>
  <h5 class="card-title">Billing Details</h5>
    <h6 class="card-subtitle mb-2 ">These details will be shown on your invoice</h6>
    <h6 class="card-subtitle mb-2 ">
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Use same as delivery details
  </label>
</div>
    </h6>
    <div class="col-md-6">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputPassword4"placeholder="Pincode"/>
  </div>
  <div class="col-md-6">
    
    <input type="text" class="form-control form-control-lg bg-dark" id="inputPassword4"placeholder="State"/>
  </div>

  <div class="col-md-8">

  <h5 class="card-title">Receive updates on the latest events,exclusive offers and much more in your inbox</h5>
  </div>
  <div class="col-md-6">
    
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Yes</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">No</label>
</div>

  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary border fw-bold"style={{"width":"200px","backgroundColor":"blueviolet"}}>Update</button>
  </div>
</form>
  </div>
</div>
       </div>
    
    
  </div>
  
</div>
    </>)
}
export default Profilepage1;