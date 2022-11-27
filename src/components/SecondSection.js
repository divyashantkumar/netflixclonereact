import '../style/secondSection.css';
import '../style/section.css';

function SecondSection() {
    return (
        <section className="sectionTwo">
            <div className="row d-flex flex-row-reverse justify-content-center">
                <div className="col-lg-5 d-flex flex-column justify-content-center sectionTwoCol">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>
                        Save your favourites easily and always have something to watch.
                    </h2>
                </div>
                <div className="col-lg-5 sectionTwoCol">
                    <img className="sectionTwoColImage" src="https://github.com/DivyashantKumar/netflixAssets/blob/main/images/mobile-0819.jpg?raw=true" alt="download" />

                        <div className="storyCard">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="storyCard" />

                                <div className="sectionTwoColText">
                                    <p>Stranger Things <br/><span>Downloading...</span></p>
                                </div>
                                <div className="animation"></div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;