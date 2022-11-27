import '../style/section.css';
import '../style/firstSection.css'

function FirstSection() {
    return (
        <section className="sectionOne">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 d-flex flex-column justify-content-center sectionOneCol">
                    <h1>Enjoy on your TV.</h1>
                    <h2>
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                        players and more.
                    </h2>
                </div>
                <div className="col-lg-5 sectionOneCol">
                    <div className="vid">
                        <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay={true} loop={true} muted type="video/m4v">
                        </video>                      
                    </div>
                    <div className="image">
                        <img src="https://github.com/DivyashantKumar/netflixAssets/blob/main/images/tv.png?raw=true" alt="tv"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;