import React from "react";
import Slider from "react-slick";
function Eventdetail1()
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
    <div className="container-fluid bg-dark text-primary" >
  <div class="container-fluid background-image">
    <div class="row align-items-start">
      <div class="col" style={{"position": "relative"}}>
       
        
        <div class="" style={{"position": "absolute", "top": "250px", "left": "80px"}}>
          <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle border border-3 border-black" alt="..." style={{"width": "150px", "height": "150px"}}/>
        </div>
        
        
       
      </div>
      
    </div>
    
  </div>
  
  <div class="container-fluid bg-black bg-opacity-25">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-transparent border border-0">
 
  <div class="card-body mt-3">
  <div class="row">
  <div class="col-sm-8 mb-3 mb-sm-0">
    <div class="card h-100 bg-transparent text-light border border-0">
      <div class="card-body mt-5 mx-4">
        <h4 class="card-title">Samay Raina</h4>
        <p class="card-text">Occupation: <b>Actor-Special Appearances-Producer-writer-voice cast</b></p>
        <p class="card-text">Born: <b>December 27,1965</b></p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card bg-transparent text-light border border-0">
      <div class="card-body">
        <div className="d-flex justify-content-center">

        <button type="button" class="btn btn-primary btn-lg mb-2 border border-0"style={{"width":"200px","background":"blueviolet"}}>Follow</button>
        </div>
        
        <p class="card-text d-flex justify-content-center">715 Followers</p>
        <div class="card bg-transparent text-light border border-0">
  <div class="card-body">
  <div class="d-flex flex-row justify-content-center">
  <div class="p-2"><i class="fa-brands fa-x-twitter fs-3"></i></div>
  <div class="p-2"><i class="fa-brands fa-facebook fs-3 text-primary"></i></div>
  <div class="p-2"><i class="fa-brands fa-pinterest fs-3 text-danger"></i></div>
  <div class="p-2"><i class="fa-brands fa-whatsapp fs-3 text-success"></i></div>
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
  <hr class="border border-light border-2 opacity-50"></hr>
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
<div class="container text-light">
  <div class="row align-items-start">
   
    
    <div class="col">
    <div class="card col-md-8 bg-transparent text-light border border-0">
  
  <div class="card-body ">
    <h5 class="card-title">About</h5>
    <p class="card-text ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore illo placeat sapiente alias voluptatem tempora, cumque, molestiae veniam nihil, labore natus necessitatibus. Aliquam pariatur suscipit tempora alias at temporibus molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam sed. Illum, excepturi. Dolore quas, perferendis quam placeat exercitationem libero molestiae! Similique commodi qui nemo earum doloremque nihil enim ipsa?</p>
    
  </div>
</div>
    </div>
  </div>
</div>

<div class="container text-light">
  <div class="row align-items-start">
   
    
    <div class="col">
    <div class="card col-md-10 bg-transparent text-light border border-0">
  
  <div class="card-body ">
    <h2 class="card-title">Other Artists</h2>
    <div class="container-fluid text-light">
  <div class="row align-items-start">
    <div class="col">
    <div class="card mt-2 bg-transparent container border border-0">
 
 <div class="card-body">
 
    <div className="slider-container text-light ">
      <Slider {...settings3}>
        <div>
        <div>
       <div class=" mx-2 scaling">
 <img src="https://img.freepik.com/free-photo/guitarist-man-playing-guitar-home_144627-28083.jpg?w=360" class="card-img-top rounded-circle" alt="..."style={{"height":"80px","width":"80px"}}/>
 
 <div class="">
   <h6 class="card-title hide">Monster Jam</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-2 scaling">
 <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle" alt="..."style={{"height":"80px","width":"80px"}}/>
 
 <div class="">
   <h6 class="card-title hide">Mark Normand</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-2 scaling">
 <img src="https://rb.gy/euu8ui" class="card-img-top rounded-circle" alt="..."style={{"height":"80px","width":"80px"}}/>
 
 <div class="">
   <h6 class="card-title hide">Bill Burr</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-2 scaling">
 <img src="https://rb.gy/jo3a2p" class="card-img-top rounded-circle" alt="..."style={{"height":"80px","width":"80px"}}/>
 
 <div class="">
   <h6 class="card-title hide">Tom Segura</h6>
   
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-2 scaling">
 <img src="https://rb.gy/euu8ui" class="card-img-top rounded-circle" alt="..."style={{"height":"80px","width":"80px"}}/>
 
 <div class="">
   <h6 class="card-title hide">Bill Burr</h6>
  
 </div>
</div>
       </div>
        </div>
        <div>
        <div>
       <div class="mx-2 scaling">
 <img src="https://tricountycitizen.mihomepaper.com/wp-content/uploads/images/2019-09-29/15p1.jpg" class="card-img-top rounded-circle" alt="..."style={{"height":"80px","width":"80px"}}/>
 
 <div class="">
   <h6 class="card-title hide">Mark Normand</h6>
  
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
    
  </div>
</div>
    </div>
  </div>
</div>




</div>


    </>)
}
export default Eventdetail1;