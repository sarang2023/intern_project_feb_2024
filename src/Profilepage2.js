import React from "react";
import Slider from "react-slick";
function Profilepage2()
{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
                slidesToShow: 1,
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
    <div className="container-fluid text-light bg-dark">

    
    <div class="container-fluid text-center text-light bg-dark">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-transparent text-light border border-0">
  
  <div class="card-body ">
    <h1 class="card-title f-size">GROW YOUR</h1>
    <h1 class="card-title f-size">EVENTS EMPIRE</h1>
   
    <p class="card-text fs-6 col-md-6 mx-auto">More than just a ticket system, our innovative ticketing and marketing engine is purpose built to accelarate your brand's growth and help take your events business to the next level.</p>
    <a href="#" class="btn btn-primary border fs-3"style={{"backgroundColor":"blueviolet"}}>GET STARTED</a>
  </div>
</div>
    </div>
   
  </div>
  <div class="container-fluid text-center">
  <div class="row align-items-start">
    
    <div class="col">
    <div class="card border border-0" >
  <img src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg" class="card-img-top" alt="..."style={{"height":"650px"}}/>
  
</div>
    </div>
  </div>
</div>


</div>
<div class="container-fluid text-light bg-dark">
  <div class="row align-items-start">
    <div class="col">
    
    <div class="card bg-transparent text-light border border-0">
  <div class="card-body">
  <hr class="border border-light border-2 container-fluid"></hr>
  <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h5>EVENT ORGANISERS AND COUNTING 30,000</h5>
        </div>
        <div>
        <h5>EVENT ORGANISERS AND COUNTING 30,000</h5>
        </div>
        <div>
        <h5>EVENT ORGANISERS AND COUNTING 30,000</h5>
        </div>
        
      
      </Slider>
    </div>
    <hr class="border border-light border-2 container-fluid"></hr>
  </div>
</div>
    </div>
    
  </div>
</div>
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-transparent text-light border border-0"style={{"height":"500px"}}>
 
  <div class="card-body ">
    <h5 class="card-title">Social ticketing</h5>
    <h1 class="card-title">A new approach to ticketing</h1>
    <h1 class="card-title">that's all about building your</h1>
    <h1 class="card-title">following, not ours.</h1>
    <p class="card-text fs-6 col-md-6 mx-auto">We provide the tools to build a loyal customer base that you can re-engage whenever you need them. Boosting your revenues, freeing up your time,and making your marketing go further.</p>
    <a href="#" class="btn btn-primary fs-5 fw-bold border"style={{"width":"200px","backgroundColor":"blueviolet"}}>LIST EVENT</a>
  </div>
</div>
    </div>
    
  </div>
</div>
<div class="container-fluid  bg-black bg-opacity-25 responsive1 ">
  <div class="row align-items-start">
    
    <div class="col">
    <div class=" ">
  
  <div class="">
  



  <div class="row d-flex align-items-center justify-content-center">
  <div class="col-sm-4 mb-3 mb-sm-0 ">
  <div class="card bg-transparent text-light responsive mb-5"style={{"position":"relative","bottom":"100px"}}>
  <img src="https://img.freepik.com/premium-photo/set-tickets-2d-design-with-vintage-style-frame-vector-creative-flat-color-label-packaging_655090-355455.jpg" class="card-img-top rounded-4" alt="..."style={{"height":"500px"}}/>
  <div class="card-body">
    <h5 class="card-title">01. SELL TICKETS</h5>
    <p class="card-text">Increase conversations and give your customers a premium buying experience. Our optimised,intuitive ticketing and marketing features give you everything you need to maximize ticket sales.</p>
   
  </div>
</div>
  <div class="card bg-transparent text-light responsive"style={{"position":"relative","bottom":"100px"}}>
  <img src="https://ajuxt.com/wp-content/uploads/2022/10/Event-Promotion-850x425.png" class="card-img-top rounded-4" alt="..."style={{"height":"500px"}}/>
  <div class="card-body">
    <h5 class="card-title">03. PROMOTE DIRECTLY TO THEM</h5>
    <p class="card-text">Get your customers coming back, again and again. Promote your events in just one click. Send Emails, WhatsApps, SMS, push notifications in our app to all your followers.</p>
   
  </div>
</div>
    
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
  <div class="card bg-transparent text-light responsive mb-5"style={{"position":"relative","bottom":"50px"}}>
  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/1000-followers-design-template-879a4105221b03a75a82faedeb65447d_screen.jpg?ts=1618231634" class="card-img-top rounded-4" alt="..."style={{"height":"500px"}}/>
  <div class="card-body">
    <h5 class="card-title">02. BUILD A FOLLOWING</h5>
    <p class="card-text">Grow your audience with every ticket you sell. Everytime a customer purchases a ticket to your event on Sort My Scene they become part of your following. Giving you a stronger foundation to launch your next event.</p>
    
  </div>
</div>
<div class="card bg-transparent text-light responsive"style={{"position":"relative","bottom":"50px"}}>
  <img src="https://st.depositphotos.com/1020618/1385/i/450/depositphotos_13855256-stock-photo-abstract-christmas-background.jpg" class="card-img-top rounded-4" alt="..."style={{"height":"500px"}}/>
  <div class="card-body">
    <h5 class="card-title">04. GET PEOPLE TALKING</h5>
    <p class="card-text">See your customers promote your events for you. Our app's chat and share features keep the conversation about your events going, even after purchase. It's how each sale becomes an ad for your brand.</p>
    
  </div>
</div>
  </div>
</div>
  </div>
</div>
    </div>
    
  </div>
</div>


<div class="container-fluid text-center mt-5">
  <div class="row align-items-start">
    <div class="col">
    <div class="card text-light bg-transparent border border-0">
 
  <div class="card-body">
    <h4 class="card-title ">Everything's covered</h4>
    <h1 class="card-text f-size1">We push boundaries, but we build</h1>
    <h1 class="card-text f-size1">on solid foundations. All the</h1>
    <h1 class="card-text f-size1">basics are covered too.</h1>
    
  </div>
</div>
    </div>
    
  </div>
</div>

<div class="container mt-3">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-transparent border border-0">
  
  <div class="card-body ">
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 bg-transparent text-light border border-0">
      <img src="https://img.freepik.com/premium-photo/set-tickets-2d-design-with-vintage-style-frame-vector-creative-flat-color-label-packaging_655090-355455.jpg" class="card-img-top rounded-4" alt="..."style={{"height":"300px"}}/>
      <div class="card-body">
        <h5 class="card-title">SELL TICKETS</h5>
        <p class="card-text">Our ticketing experience is optimised for you and your customers. Our web pages are designed for speed and search, so your events are found quicker, and customers checkout faster. And it's even better in our apps, where 70% of our ticket sales are made.</p>
      </div>

    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-transparent text-light border border-0">
    <img src="https://img.freepik.com/premium-photo/set-tickets-2d-design-with-vintage-style-frame-vector-creative-flat-color-label-packaging_655090-355455.jpg" class="card-img-top rounded-4" alt="..."style={{"height":"300px"}}/>
      <div class="card-body">
        <h5 class="card-title">MARKET YOUR EVENTS</h5>
        <p class="card-text">Reach more customers with our unique promotional tools and world-leading customer apps. And integrate with the most popular ad and analytics platforms so you can optimise all your marketing channels too.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-transparent text-light border border-0">
    <img src="https://img.freepik.com/premium-photo/set-tickets-2d-design-with-vintage-style-frame-vector-creative-flat-color-label-packaging_655090-355455.jpg" class="card-img-top rounded-4" alt="..."style={{"height":"300px"}}/>
      <div class="card-body">
        <h5 class="card-title">MANAGE OPERATIONS</h5>
        <p class="card-text">Get customers through the door faster with Sort My Scene Scan, our robust and reliable ticket scanning app for iPhone and Android.</p>
      </div>
      
    </div>
  </div>
</div>
  </div>
</div>
    </div>
    
  </div>
</div>
<div class="container-fluid text-center mt-5 bg-black bg-opacity-25 rounded-5">
  <div class="row align-items-start">
    <div class="col">
    <div class="card bg-transparent text-light">
  
  <div class="card-body">
    <h1 class="card-title f-size1">DESIGNED</h1>
    <h1 class="card-title f-size1">WITH CARE</h1>
    <p class="card-text col-md-6 mx-auto f-size2">We care about your customers experience with your brand as much as you do. That's why we craft and continually improve every aspect of our customer experience. So you can be confident your events and business are represented with the respect they deserve.</p>
    <a href="#" class="btn btn-primary fs-4 border fw-bold"style={{"background":"blueviolet","width":"200px"}}>LIST EVENT</a>
  </div>
</div>
    </div>
    
  </div>
</div>
</div>
    </>)
}
export default Profilepage2;