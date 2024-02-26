import React from "react";
import Slider from "react-slick";
function Home()
{
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "400px",
        slidesToShow: 1,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
              centerPadding: "40px",
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



      var settings2 = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
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
      var settings3 = {
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
              slidesToShow: 3,
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
        <div class="card rounded-5"style={{"height":"250px"}}>
  <div class="">
  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ef7e7d176294525.64c23ef16862d.jpg" class="img-fluid card-img-top w-100 rounded-5" alt="..."style={{"height":"250px"}}/>
  </div>
</div>
        </div>
        <div className="p-1">
        <div class="card rounded-5"style={{"height":"250px"}}>
        <div class="">
  <img src="https://shorturl.at/bpxHX" class="img-fluid card-img-top w-100 rounded-5" alt="..."style={{"height":"250px"}}/>
  </div>
</div>
        </div>
        <div className="p-1">
        <div class="card rounded-5"style={{"height":"250px"}}>
        <div class="">
  <img src="https://shorturl.at/ahtO8" class="img-fluid card-img-top w-100 rounded-5" alt="..."style={{"height":"250px"}}/>
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


{/* section9 6 boxes */}
<div className="container-fluid bg-black">

<div class="container text-center text-light ">
  <div class="row align-items-start ">
   
    
    <div class="col">
    <div class="card-group mt-5 scaling1">
 
  <div class="card bg-transparent border border-0">
   
    <div class="card-body">
    <div class="d-flex flex-row justify-content-around ">
  <div class="p-2  rounded-4 mx-1 box-w">
  <img src="nightlife.jpg"className="img-fluid px-1 rounded-circle"style={{"width":"40px","height":"40px"}} alt="" />
  <span className="text-light">Nightlife</span>
  </div>
  <div class="p-2 rounded-4 mx-1 box-w">  <img src="celebration.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Festivals</span></div>

  <div class="p-2 rounded-4 box-w tilted-card"> <img src="instruments.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Music</span></div>
</div>
    </div>
  </div>
  <div class="card bg-transparent border border-0">
    <div class="card-body">

    <div class="d-flex flex-row justify-content-between ">
  <div class="p-2 rounded-4 mx-1 box-w">
  <img src="workshop.jpg"className="img-fluid px-1 rounded-circle"style={{"width":"40px","height":"40px"}} alt="" />
  <span className="text-light">Workshop</span>
  </div>
  <div class="p-2 rounded-4 box-w">  <img src="theater.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Comedy</span></div>
  <div class="p-2 rounded-4 box-w"> <img src="menu.png"className="img-fluid px-1"style={{"width":"50px"}} alt="" />
  <span className="text-light">Theatre</span></div>
</div>
    </div>
  </div>
</div>    </div>
  </div>
</div>
</div>




{/* section2 recommended */}
<div class="container-fluid bg-black text-light">
  <div class="row align-items-start">
   
    
    <div class="col">
    <div class="card mt-2 bg-transparent container">
 
  <div class="card-body">
  <div class="container text-light">
  <div class="row align-items-start">
        <div class="col">
        <p class="fs-3 fw-bold"><i class="fa-solid fa-medal mx-2"></i>Recommended Events</p>
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



{/* section3 outdoor events */}
<div class="container-fluid bg-dark text-light">
  <div class="row align-items-start">
   
    
    <div class="col">
      <div className="container-fluid bg-black rounded-5 mt-5">

    <div class="card bg-transparent container border border-0 pb-5 pt-3">
 
  <div class="card-body">
  <div class="container text-light">
  <div class="row align-items-start">
        <div class="col">
        <p class="fs-3 fw-bold"><i class="fa-solid fa-champagne-glasses mb-3"></i>Outdoor Events</p>
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



{/* section10 featured events */}





<div class="container-fluid bg-dark text-light">
  <div class="row align-items-start">
   
   
    <div class="col">
    <p class="fs-2 fw-bolder mx-4 mt-5 mb-5 ">Featured Events</p>
    </div>
  </div>
</div>

<div class="container-fluid text-center bg-dark text-light ">
  <div class="row align-items-start ">
  <div class="row ">
  <div class="col-sm-8 mb-3 mb-sm-0 ">
    <div class="card p-5 rounded-5 bg-black">
      <div class="card-body">
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0 d-flex align-items-center justify-content-center "style={{"height":"350px"}}>
    <div class="card border border-0 bg-transparent text-light ">
      <div class="card-body">
        <h3 class="card-title fw-bold">Dinner party of</h3>
        <h3 class="card-title fw-bold"> Luis Family</h3>
        <a href="#" class="btn btn-primary mt-5 border border-0" style={{ backgroundColor: "rgba(211, 86, 225, 0.951)" }}>Book Ticket</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 d-flex align-items-center justify-content-center">
    <div class="card border border-0 bg-transparent text-light">
      <div class="card-body">
        <h5 class="card-title">Starts in...</h5>
        <p class="card-text"><figure>
  <blockquote class="blockquote">
    <p className="h5">10 |06 |35 |42</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Days Hours <cite title="Source Title">min Sec</cite>
  </figcaption>
</figure>

<hr class="border border-dark border-1 "></hr></p>

<p class="card-text"><i class="bi bi-geo-alt"></i><span>&nbsp;West Harleyborough,UK</span></p>
<p class="card-text"><i class="bi bi-clock"></i><span>&nbsp;12:30 GMT</span></p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col-sm-4 position-relative second-card">
    <div class="card rounded-5 mt-5  top-0"style={{"height":"350px","marginLeft":"-100px"}}>
      <div class="card-body back">
    
      </div>
    </div>
  </div>
</div>
    
    
   
  </div>
</div>
  


{/* section8 events this week */}
<div class="container-fluid bg-dark text-light">
  <div class="row align-items-start">
    <div class="col">
    <div class="card mt-2 bg-transparent container border border-0">
 
 <div class="card-body">
 <div class="container text-light">
 <div class="row align-items-start">
       <div class="col">
       <p class="fs-3 fw-bold">Events This Week</p>
   </div>
 </div>
 
</div>

<div class="container text-light mt-3 ">
  <div class="row align-items-start mx-3">
    
  
    <div class="col">
    <div class="row">
  <div class="col-sm-3 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Today</h5>
        
        <p class="card-text text-light">Wed, 10 Jan</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3  mb-3">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Tomorrow</h5>
        <p class="card-text text-light">Thu, 11 Jan</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body bg-d rounded-2">
        <h5 class="card-title"style={{"color":"violet"}}>Weekend</h5>
        <p class="card-text text-light">13-14 Jan</p>
      </div>
    </div>
  </div>
</div>
</div></div></div>
 </div>
</div>
    </div>
   
   
  </div>
</div>



{/* section 4 events you join*/}
<div class="container-fluid bg-dark text-light">
  <div class="row align-items-start">
    <div class="col">
    <div class="card mt-2 bg-transparent container border border-0">
 
 <div class="card-body">
 <div class="container text-light">
 <div class="row align-items-start">
       <div class="col">
       <p class="fs-3 fw-bold">Events You Join</p>
   </div>
 </div>
</div>
    <div className="slider-container text-light">
      <Slider {...settings2}>
        <div>
        <div>
       <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
 <img src="https://shorturl.at/dsy01" class="card-img-top" alt="..."style={{"height":"300px"}}/>
 
 <div class="card-body text-light">
   <h6 class="card-title">Glasgow International Hosted</h6>
   <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
   <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
   <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
             <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
 <img src="https://shorturl.at/dsy01" class="card-img-top" alt="..."style={{"height":"300px"}}/>
 
 <div class="card-body text-light">
   <h6 class="card-title">Glasgow International Hosted</h6>
   <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
   <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
   <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
             <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
 <img src="https://shorturl.at/dsy01" class="card-img-top" alt="..."style={{"height":"300px"}}/>
 
 <div class="card-body text-light">
   <h6 class="card-title">Glasgow International Hosted</h6>
   <p class="card-text"><i class="fa-solid fa-calendar-days"></i> 7th Mar,2024 | 6:30 AM</p>
   <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
   <a href="#" class="btn btn-primary btn-sm w-100 d-flex justify-content-between border border-0 fw-bold">
             <span><i class="fa-solid fa-indian-rupee-sign"></i> 550 Onwards</span> <span>|BUY NOW</span></a>
 </div>
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


{/* section5  blog*/}
<div class="container-fluid bg-black text-light">
  <div class="row align-items-start">
   
    
    <div class="col">
    <div class="card mt-2 bg-transparent container">
 
  <div class="card-body">
  <div class="container text-light">
  <div class="row align-items-start">
        <div class="col">
        <p class="fs-3 fw-bold">Blog</p>
    </div>
  </div>
</div>
  <div className="slider-container">
      <Slider {...settings1}>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://img3.wallspic.com/previews/8/5/7/6/2/126758/126758-performance-productivity-event-ballet-performing_arts-x750.jpg" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Dance</button>
  <div className="card-footer"style={{"position":"absolute","bottom":"0"}}>
   <p class="card-text text-light fw-bolder">Put on your shoes 'cause we're going dancing,again!</p>
  </div>

  </div>
  
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://img.freepik.com/free-photo/young-woman-working-her-worshop_23-2149536262.jpg?w=360&t=st=1707994985~exp=1707995585~hmac=53589e9cfc03c41a9c74b7c0fd9a586e83e0eb6c3417b8208720b985b613a2e5" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Workshop</button>
  <div className="card-footer"style={{"position":"absolute","bottom":"0"}}>
   <p class="card-text text-light fw-bolder">Cakes,Cartoons,Crafts,Create something with digital workshops!</p>
  </div>

  </div>
  
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://img.freepik.com/free-photo/lifestyle-people-learning-make-sushi_23-2149865357.jpg?w=360&t=st=1707995304~exp=1707995904~hmac=c375daf45b41f25e853522b0bc2c43340fe86a6dc54f638f97a1a47dab78e14b" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Food</button>
  <div className="card-footer"style={{"position":"absolute","bottom":"0"}}>
   <p class="card-text text-light fw-bolder">Bake,brew and barbeque with interactive online food workshops</p>
  </div>

  </div>
 
</div>
        </div>
        <div>
        <div class="card mx-1 border-2 border-white bg-black" style={{"width": "18rem;"}}>
  <img src="https://img.freepik.com/free-vector/birthday-celebration-card-with-confetti-image-space_1017-36192.jpg?w=996&t=st=1707995424~exp=1707996024~hmac=6bead11538b9a398a0c32991af601014a25f2ac7903a4dc137f9938cb9427990" class="card-img-top" alt="..."style={{"height":"300px"}}/>
  <div className="card-img-overlay">
  <button type="button" class="btn btn-danger">Private Parties</button>
  <div className="card-footer"style={{"position":"absolute","bottom":"0"}}>
   <p class="card-text text-light fw-bolder">9 Creative Virtual Birthday Party Ideas</p>
  </div>
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



{/* section6 artists */}
<div class="container-fluid bg-black text-light">
  <div class="row align-items-start">
    <div class="col">
    <div class="card mt-2 bg-transparent container">
 
 <div class="card-body">
 <div class="container text-light">
 <div class="row align-items-start">
       <div class="col">
       <p class="fs-3 fw-bold">Artists</p>
   </div>
 </div>
</div>
    <div className="slider-container text-light ">
      <Slider {...settings3}>
        <div>
        <div>
       <div class=" mx-1 scaling">
 <img src="https://img.freepik.com/free-photo/guitarist-man-playing-guitar-home_144627-28083.jpg?w=360" class="card-img-top rounded-circle" alt="..."style={{"height":"120px","width":"120px"}}/>
 
 <div class="">
   <h6 class="card-title">Monster Jam</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-1 scaling">
 <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle" alt="..."style={{"height":"120px","width":"120px"}}/>
 
 <div class="">
   <h6 class="card-title">Mark Normand</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-1 scaling">
 <img src="https://rb.gy/euu8ui" class="card-img-top rounded-circle" alt="..."style={{"height":"120px","width":"120px"}}/>
 
 <div class="">
   <h6 class="card-title">Bill Burr</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-1 scaling">
 <img src="https://rb.gy/jo3a2p" class="card-img-top rounded-circle" alt="..."style={{"height":"120px","width":"120px"}}/>
 
 <div class="">
   <h6 class="card-title">Tom Segura</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-1 scaling">
 <img src="https://rb.gy/euu8ui" class="card-img-top rounded-circle" alt="..."style={{"height":"120px","width":"120px"}}/>
 
 <div class="">
   <h6 class="card-title">Bill Burr</h6>
  
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-1 scaling">
 <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle" alt="..."style={{"height":"120px","width":"120px"}}/>
 
 <div class="">
   <h6 class="card-title">Mark Normand</h6>
  
 </div>
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


{/* section7 subscribe */}
<div class="container-fluid bg-dark text-light ">
  <div class="row align-items-start">
    
  
    <div class="col">
    <div className="container-fluid bg-black bg-opacity-25 rounded-5 mt-5 p-5 mb-5">
    <div class="card bg-transparent text-light text-center border border-0">
 
  <div class="card-body">
  <p class="card-text">Want to hear about the best things to do in your city?</p>
    <h2 class="card-title fw-bolder">SUBSCRIBE TO OUR NEWSLETTER!</h2>
    <p class="card-text">Join our mailing list and stay up to date with the latest events around you</p>
    <div class="container text-center">
  <div class="row align-items-start">
   
  
    <div class="col">
    <form class="row row-cols-lg-auto g-3 align-items-center justify-content-center">
  <div class="col-12">
   
  <input class="form-control form-control-lg bg-dark" type="text" placeholder="Enter Email" aria-label=".form-control-lg example"/>

  </div>

  

  

  <div class="col-12">
  <button type="button" class="btn btn-primary btn-lg border border-0"style={{"backgroundColor":"blueviolet"}}>YES, IM IN</button>

  </div>

</form>
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
export default Home