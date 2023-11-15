import Navbar from 'react-bootstrap/Navbar';
import './App.css';


function Footer() {
    
    return (
        <>
        <div className="Footer">
            <div className="container text-center">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h4 className='footerheader' href="/">HEIRS MULTI SPECIALIST HOSPITAL</h4>
                    <h6>We're about saving lives and giving hope to the living.</h6>
                    <div className='footer-icons'>
                        <i class="fa-brands fa-square-facebook fa-xl"></i>
                       <i class="fa-brands fa-square-instagram fa-xl"></i>
                       <i class="fa-brands fa-square-twitter fa-xl"></i>

                    </div>
                    
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h4 className='footerheader'>Quick Links</h4>
                     <h6>Home</h6>
                    <h6>About Us</h6>
                    <h6>Our Teams</h6>
                    <h6>Our Services</h6>
                    
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h4 className='footerheader'>Contact Info</h4>
                    <h6><i class="fa-solid fa-phone"></i> +2348148307984</h6>
                    <h6><i class="fa-solid fa-inbox"></i> aderibigbevictor79@gmail.com</h6>
                     
                </div>
                

            </div>
            </div>
        </div>
        <div className='last-footer'>
        <p >Design by Idebugg</p>
        </div>
        </>
        
    )
}

export default Footer;