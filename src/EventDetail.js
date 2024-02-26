import React from "react";
import Slider from "react-slick";
function EventDetail()
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    ,
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
        breakpoint:600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint:820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint:900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(<>
    <div class="container-fluid  bg-dark text-light">
  <div class="row align-items-start">
    <div class="col">
    <div class="row">
  <div class="col-sm-8 mb-3 mb-sm-0">
    <div class="card bg-transparent border border-0">
      <div class="card-body ">
      


<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-samay-raina-unfiltered-india-tour-0-2023-12-13-t-13-43-45.jpg" class="d-block w-100 rounded-4 " alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-samay-raina-unfiltered-india-tour-0-2023-12-13-t-13-43-45.jpg" class="d-block w-100 rounded-4 " alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-samay-raina-unfiltered-india-tour-0-2023-12-13-t-13-43-45.jpg" class="d-block w-100 rounded-4 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="card bg-transparent text-light border border-0">
  
  <div class="card-body">
    <h2 class="fw-bold ">Founder Institute Dhaka Graduate</h2>
    <h2 className="fw-bold">Showcase & Networking Event</h2>

    <p class="card-text  fw-bold"style={{"color":"blueviolet"}}>7th Mar,2024 | 6:30 AM</p>
    
  </div>
</div>

<div class="card bg-transparent text-light border border-0">
  <div class="card-body">
    <h5 class="card-title">About</h5>
    <hr />
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut minus quibusdam ex iure sapiente temporibus nam et excepturi quasi! Suscipit, et non possimus iste quam, voluptate itaque eius tempore cum reprehenderit quo cupiditate vitae nesciunt veniam amet, eaque assumenda exercitationem dignissimos. Molestiae assumenda corrupti natus sequi, dolorem voluptatibus molestias omnis alias provident laborum consequatur suscipit totam ipsa similique rem.</p>
    
  </div>
</div>


<div class="card bg-transparent text-light border border-0">
  <div class="card-body ">
  <div class="accordion " id="accordionPanelsStayOpenExample">
  <div class="accordion-item bg-black bg-opacity-25 text-light rounded-5">
    <h2 class="accordion-header ">
      <button class="accordion-button bg-black bg-opacity-25 text-light rounded-top-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Terms & Conditions
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  
</div>
    
  </div>
</div>
<div class="card bg-transparent text-light border border-0">
  <div class="card-body">
  <div class="accordion " id="accordionPanelsStayOpen">
  <div class="accordion-item bg-black bg-opacity-25 text-light rounded-5">
    <h2 class="accordion-header">
      <button class="accordion-button bg-black bg-opacity-25 text-light rounded-top-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       Additional Details
      </button>
    </h2>
    <div id="panelsStayOpen-collapse" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  
</div>
    
  </div>
</div>
      </div>
      
    </div>
  </div>




  {/* section side */}
  <div class="col-sm-4 mt-3">
    <div class="card rounded-4 bg-black bg-opacity-25">
      <div class="card-body">
      <div class="card text-light bg-transparent border border-0">
  <div class="card-body">
    <h5 class="card-title">
    <div class="d-flex flex-row justify-content-between">
  <div class="h4"><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwords</div>
  <div class=""><button type="button" class="btn btn-primary fw-bold border border-0"style={{"backgroundColor":"blueviolet"}}>BUY NOW</button>
</div>
  
</div>
<hr /> 
<div class="d-flex flex-row justify-content-between">
  <div class=""><i class="fa-regular fa-bookmark"></i> Workshops</div>
  <div class=""><button type="button" class="btn btn-dark"><i class="fa-regular fa-heart"></i></button>
</div>
  
</div>
<div class="d-flex flex-row justify-content-between mt-1">
  <div class=""><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</div>
  <div class=""><button type="button" class="btn btn-dark"><i class="bi bi-share-fill"></i></button>
</div>
  
</div>
<hr />  
</h5>
    
<div class="card text-light bg-transparent border border-0">
  <div class="card-body">
    <h5 class="card-title">Lineup</h5>
    <div class="card text-light bg-transparent border border-0">
  <div class="card-body">
  <div className="slider-container">
      <Slider {...settings}>
        <div className="scaling">
        <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Samay Raina</p>
        </div>
        <div className="scaling">
        <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Samay Raina</p>
        </div>
        <div className="scaling">
        <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Samay Raina</p>
        </div>
        <div className="scaling">
        <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Samay Raina</p>
        </div>
       
      </Slider>
    </div>
  </div>
</div>
  <hr />
  </div>
</div>
<div class="card text-light bg-transparent border border-0">
  <div class="card-body">
    <h5 class="card-title">Organiser</h5>
    <div class="card text-light bg-transparent border border-0">
  <div class="card-body">
  <div className="slider-container">
      <Slider {...settings}>
        <div className="scaling">
        <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMGluJTIwY29hdHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Robot Wilson</p>
        </div>
        <div className="scaling">
        <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMGluJTIwY29hdHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Robot Wilson</p>
        </div>
        <div className="scaling">
        <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMGluJTIwY29hdHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Robot Wilson</p>
        </div>
        <div className="scaling">
        <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMGluJTIwY29hdHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top rounded-circle border border-2 border-white" alt="..."style={{"height":"70px","width":"70px"}}/>
        <p className="card-text">Robot Wilson</p>
        </div>
       
      </Slider>
    </div>
  </div>
</div>
  <hr />
  </div>
</div>
<div class="card text-light bg-transparent border border-0" >
  <div class="card-body">
    <h4 class="card-title">Venue</h4>
    <h6 class="card-subtitle mb-2">Bangladesh</h6>
    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/afe36b187045577.Y3JvcCwyMTU4LDE2ODgsNDIyLDA.png" class="card-img-top rounded-3"alt="..."style={{"height":"200px"}}/>
    <div class="card-body">
    <p class="card-text"style={{"fontSize":"13px"}}>ULAB Campus-B Seminar Room House: 85, Road: 7/A, Satmasjid Road Dhanmondi R/A, Dhaka,Bangladesh-1207</p>
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
  <div class="container-fluid">
  <div class="row align-items-start">
   
    
    <div class="col">
      <div className="container-fluid bg-black bg-opacity-25 rounded-5 mt-5 mb-5">

    <div class="card bg-transparent container border border-0 pb-5 pt-3">
 
  <div class="card-body">
  <div class="container text-light">
  <div class="row align-items-start">
        <div class="col">
        <p class="fs-3 fw-bold pt-3 pb-3">You may also like</p>
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
</div>
</div>
    </>)
}
export default EventDetail;
