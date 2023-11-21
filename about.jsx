import React,{useEffect} from 'react';
import './about.css';
import  Img1 from '../images/image (1).jpg';
import  Img3  from '../images/image (3).jpg';
import  Img5  from '../images/image (5).jpg';
import  Img2  from '../images/image (2).jpg';
import  Img9  from '../images/image (9).jpg';
import  Img8  from '../images/image (8).jpg';


export const About = () => {
  return (
    <div>
		
      
              <div>
			  <div className='about-Id'>
			<h1>About Us</h1>
		</div>
        <div class="responsive-container-block bigContainer">
       
            <div class="responsive-container-block Container">
                <div class="responsive-container-block rightSide" >
                <img class="number1img" src={ Img1 } data-aos="zoom-in"/>
                <img class="number2img" src={ Img3 } data-aos="zoom-in"/>
                <img class="number3img" src={ Img5 } data-aos="zoom-in"/>
                <img class="number5img" src={ Img2 } data-aos="zoom-in"/>
                <iframe allowfullscreen="allowfullscreen" class="number4vid" poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png" src="https://www.youtube.com/embed/" data-aos="zoom-in">
                </iframe>
                <img class="number7img" src={ Img9 } data-aos="zoom-in"/>
                <img class="number6img" src={ Img8 } data-aos="zoom-in"/>
                </div>
                <div class="responsive-container-block leftSide">
                <p class="text-blk heading" data-aos="fade-right">
                    Meet Our Creative Team
                </p>
                <p class="text-blk subHeading" data-aos="fade-right">
                    Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising &amp; Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design.
                </p>
                </div>
                
            </div>
            </div>
        </div>

        <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		
  	 
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </div>
  )
}
