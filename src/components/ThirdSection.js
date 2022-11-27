import '../style/thirdSection.css';
import '../style/section.css';

function ThirdSection() {
    return (
        <section className="sectionThree">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 d-flex flex-column justify-content-center sectionThreeCol">
                    <h1>Watch everywhere.</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
                <div className="col-lg-5 sectionThreeCol">
                    <div className="vid">
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay={true} loop={true} muted type="video/m4v"></video>                      
                    </div>
                    <div className="image">
                        <img src="https://github.com/DivyashantKumar/netflixAssets/blob/main/images/device-pile-in.png?raw=true" alt="tv" />
                    </div>
                </div>                
            </div>
        </section>
    );
}

export default ThirdSection;