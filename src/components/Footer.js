import '../style/footer.css';
import { FaGlobe } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    function handleclick(){
        navigate('/browse/genre')
    }
    return (
        <footer>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-sm-12 col-10">
                    <p className="footerHeading">Questions? Call 000-800-040-1843</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center footerNavigation">
                <div className="col-lg-2 col-sm-3 col-5">
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li> <a href="#">Speed Test</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-3 col-5">
                    <ul>
                        <li><a href="#">Help Centre</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Legal Notices</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-3 col-5">
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                        <li><a href="#">Corporate Information</a></li>
                        <li><a className='onlyOnNetflix' onClick={handleclick}>Only on Netflix</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-sm-3 col-5">
                    <ul>
                        <li><a href="#">Media Centre</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-sm-12 col-10">
                    <div className="btn-group languageDropdown">
                        <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaGlobe />&nbsp;&nbsp; English
                        </button>
                        <ul className="dropdown-menu w-auto languageDropdownMenu">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Hindi</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-sm-12 col-10">
                    <p className="netflixIndia">Netflix India</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;