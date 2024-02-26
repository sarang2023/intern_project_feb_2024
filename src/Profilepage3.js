import React from "react";
import Slider from "react-slick";
function Profilepage3()
{
    var settings1 = {
        focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
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
   <div class="container-fluid bg-dark">
  <div class="row align-items-start">
    <div class="col bg-black bg-opacity-25">
    <div class="row ">
  <div class="col-sm-6 mb-3 mb-sm-0 ">
    <div class="card bg-transparent text-light border border-0">
      <div class="card-body">
      <div class="card mb-3 bg-transparent text-light border border-0" style={{"max-width": "540px;"}}>
  <div class="row g-0 p-3">
    <div class="col-md-4 ">
      <img src="https://in.bmscdn.com/events/moviecard/ET00363551.jpg" class="img-fluid rounded-start" alt="..."style={{"width":"200px","height":"200px"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Lim Events</h2>
        <p class="card-text fs-3"><i class="bi bi-geo-alt mx-1"></i>Indore</p>
        <p class="card-text fs-5 mx-2"><small class="">Follow as on: <i class="bi bi-instagram"></i></small></p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-3 ">
    <div class="card bg-transparent text-light mt-5 border border-0">
      <div class="card-body ">
        <div className="d-flex justify-content-evenly">

        <a href="#" class="btn btn-primary border"style={{"width":"170px","background":"blueviolet"}}>Follow</a>
        </div>
        
        <h5 class="card-title d-flex justify-content-evenly pt-2">715 Followers</h5>
      </div>
    </div>
  </div>
</div>
    </div>
    
  </div>
  
</div>
<div class="container-fluid bg-dark text-light">
  <div class="row align-items-start">
   
    
    <div class="col">
    <div class="card mt-2 bg-transparent container border border-0">
 
  <div class="card-body">
  <div class="container text-light">
  <div class="row align-items-start">
        <div class="col">
        <p class="fs-3 fw-bold">Upcoming Events</p>
    </div>
  </div>
</div>
  <div className="slider-container">
      <Slider {...settings1}>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://shorturl.at/dsy01" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Music</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://i.pinimg.com/originals/23/7d/41/237d417f74b4db9e1d384dd4f2867855.jpg" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Comedy</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Food</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMTlfZXhjaXRlZF9hdWRpZW5jZV93YXRjaGluZ19jb25mZXR0aV9maXJld29ya3NfYV81ZWVlMWI3Yi1iY2VlLTRjODgtYjNjYy0yOTc2MjM3ZDkzMmJfMS5qcGc.jpg" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Celebrations</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
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
<div class="container-fluid  bg-dark text-light">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-transparent text-light container border border-0" >
  <div class="card-body">
    <h2 class="card-title">Company Description</h2>
    
    <p class="card-text col-md-10">India's leading event management company specialising in nightlife consultancy, marketing, promoting and concert ticketing we've even layed out hand in food menu setup, restaurant consultation, menu curation, production stage setup as well as managing operation of venues on day to day basis and managing operation of venues on day to day basis and managing artists as well..</p>
    
  </div>
</div>
    </div>
    
  </div>
</div>

<div class="container-fluid bg-dark text-light">
  <div class="row align-items-start">
   
    
    <div class="col">
    <div class="card mt-2 bg-transparent container border border-0">
 
  <div class="card-body">
  <div class="container text-light">
  <div class="row align-items-start">
        <div class="col">
        <h2 class="card-title">Past Events</h2>
    </div>
  </div>
</div>
  <div className="slider-container">
      <Slider {...settings1}>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://shorturl.at/dsy01" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Music</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://i.pinimg.com/originals/23/7d/41/237d417f74b4db9e1d384dd4f2867855.jpg" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Comedy</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://music.columbia.edu/sites/default/files/styles/page_image/public/images/4c4e9d8b-e6fc-4faa-a988-949e46a9c974.png?itok=az-_BxAa" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Food</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
  </div>
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMTlfZXhjaXRlZF9hdWRpZW5jZV93YXRjaGluZ19jb25mZXR0aV9maXJld29ya3NfYV81ZWVlMWI3Yi1iY2VlLTRjODgtYjNjYy0yOTc2MjM3ZDkzMmJfMS5qcGc.jpg" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Celebrations</button>

  </div>
  <div class="card-body text-light">
    <h6 class="card-title">Glasgow International Hosted</h6>
    <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
    <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
    <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
              <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
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
    </>)
}
export default Profilepage3;