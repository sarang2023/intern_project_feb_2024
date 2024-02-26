import React from "react";
import Slider from "react-slick";
function Eventdetail2()
{
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
      
      
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ]
  }



  var settings1 = {
    focusOnSelect: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(<>
    <div class="container-fluid text-center bg-dark">
  <div class="row align-items-start">
    <div class="col ">
    <div class="card bg-transparent border border-0 ">
  
  <div class="card-body ">
   
    <div className="slider-container">
      <Slider {...settings}>
        <div className="p-1">
        <div class="card rounded-5"style={{"height":"310px"}}>
  <div class="">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ef7e7d176294525.64c23ef16862d.jpg" class="img-fluid card-img-top w-100 rounded-5" alt="..."style={{"height":"310px"}}/>
  </div>
</div>
        </div>
        <div className="p-1">
        <div class="card rounded-5"style={{"height":"310px"}}>
        <div class="">
  <img src="https://shorturl.at/bpxHX" class="img-fluid card-img-top w-100 rounded-5" alt="..."style={{"height":"310px"}}/>
  </div>
</div>
        </div>
        <div className="p-1">
        <div class="card rounded-5"style={{"height":"310px"}}>
        <div class="">
  <img src="https://shorturl.at/ahtO8" class="img-fluid card-img-top w-100 rounded-5" alt="..."style={{"height":"310px"}}/>
  </div>
</div>
        </div>
        
       
        
      </Slider>
    </div>
  </div>
</div>
    </div>
   
    
  </div>
  <div class="container text-center text-light">
  <div class="row align-items-start">
    
    
    
    <div class="d-grid gap-2 d-md-block mb-5">
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle mx-1 rounded-5 bg-dark border" data-bs-toggle="dropdown" aria-expanded="false">
      Date
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle mx-1 rounded-5 bg-dark border" data-bs-toggle="dropdown" aria-expanded="false">
      Price
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-primary dropdown-toggle mx-1 rounded-5 bg-dark border" data-bs-toggle="dropdown" aria-expanded="false">
      More Filters
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    </ul>
  </div>
  <div class="btn-group" role="group">
  <div class="input-group flex-nowrap">
  <span class="input-group-text  bg-dark text-light rounded-start-5" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass"></i></span>
  <input type="text" class="form-control  bg-dark rounded-end-5" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
  </div>
</div>
  </div>
</div>

<div class="container text-center text-light">
  <div class="row align-items-start">
    
    
    <div class="col">
     <h2>All Events(308)</h2>
    </div>
  </div>
</div>






<div class="container-fluid">
  <div class="row align-items-start">
   
    
    <div class="col">
      <div className="container-fluid mt-3 mb-5">

    <div class="card bg-transparent container border border-0 pt-3">
 
  <div class="card-body">
  
  <div className="slider-container">
      <Slider {...settings1}>
        <div>
        <div class="card mx-1 border-2 border-white rounded-5" style={{"width": "18rem;","backgroundColor":"blueviolet"}}>

  <div class="card-body text-light">
    
    <h6 class="card-title">
    <div class="d-flex flex-row">
  <div class=""><i class="fa-solid fa-masks-theater fs-3 text-warning mx-2"></i></div>
  <div class="" >Comedy Shows</div>
  
</div>

</h6>
    
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black rounded-5" style={{"width": "18rem;"}}>
  
  <div class="card-body text-light">
    <h6 class="card-title">
    <div class="d-flex flex-row">
  <div class=""><i class="fa-solid fa-music fs-3 text-primary mx-2"></i></div>
  <div class="">Music Shows</div>
  
</div></h6>
    
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black rounded-5" style={{"width": "18rem;"}}>
  
  <div class="card-body text-light">
  <h6 class="card-title">
    <div class="d-flex flex-row">
  <div class=""><i class="fa-solid fa-handshake fs-3 text-primary mx-2"></i></div>
  <div class="">Workshop</div>
  
</div></h6>
   
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black rounded-5" style={{"width": "18rem;"}}>
 
  <div class="card-body text-light">
  <h6 class="card-title">
    <div class="d-flex flex-row">
  <div class=""><i class="fa-sharp fa-solid fa-person fs-3 text-success mx-2"></i></div>
  <div class="">Performance</div>
  
</div></h6>
    
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black rounded-5" style={{"width": "18rem;"}}>
 
  <div class="card-body text-light">
  <h6 class="card-title">
    <div class="d-flex flex-row">
  <div class=""><i class="fa-solid fa-child fs-3 text-success mx-2"></i></div>
  <div class="">Kids</div>
  
</div></h6>
    
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black rounded-5" style={{"width": "18rem;"}}>
 
  <div class="card-body text-light">
  <h6 class="card-title">
    <div class="d-flex flex-row">
  <div class=""><i class="fa-solid fa-handshake fs-3 text-danger mx-2"></i></div>
  <div class="">Meetups</div>
  
</div></h6>
    
  </div>
</div>
        </div>
        
      </Slider>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
 

</div>

{/* first set */}
<div class="container text-center text-light">
  <div class="row align-items-start">
    
   
    <div class="col">
    <div class="card bg-transparent border border-0">

  <div class="card-body ">
    <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://shorturl.at/dsy01" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://i.pinimg.com/originals/23/7d/41/237d417f74b4db9e1d384dd4f2867855.jpg" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary  btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
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
</div>
{/* second set */}
<div class="container text-center text-light">
  <div class="row align-items-start">
    
   
    <div class="col">
    <div class="card bg-transparent border border-0">

  <div class="card-body ">
    <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://shorturl.at/dsy01" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://i.pinimg.com/originals/23/7d/41/237d417f74b4db9e1d384dd4f2867855.jpg" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
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
</div>

{/* third set */}

<div class="container text-center text-light">
  <div class="row align-items-start">
    
   
    <div class="col">
    <div class="card bg-transparent border border-0 mb-5">

  <div class="card-body ">
    <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://shorturl.at/dsy01" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://i.pinimg.com/originals/23/7d/41/237d417f74b4db9e1d384dd4f2867855.jpg" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-black text-light border">
      <div className="hq">

    <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top " alt="..."style={{"maxHeight":"300px"}}/>
    <div class="card-body text1">
    <h6 class="card-title text">Glasgow International Hosted</h6>
    <p class="card-text text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <div className="">

    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold text2">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
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
</div>
</div>
    </>)
}
export default Eventdetail2;