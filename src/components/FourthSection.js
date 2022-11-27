import '../style/fourthSection.css'
import '../style/section.css';

function FourthSection() {
    return (
        <section className="sectionFour">
            <div className="row d-flex flex-row-reverse justify-content-center">
                <div className="col-lg-5 d-flex flex-column justify-content-center sectionFourCol">
                    <h1>Create profiles for children.</h1>
                    <h2>
                        Send children on adventures with their favourite characters in a
                        space made just for them—free with your membership.
                    </h2>
                </div>
                <div className="col-lg-5 sectionFourCol">
                    <img src="https://github.com/DivyashantKumar/netflixAssets/blob/main/images/children.png?raw=true" alt="tv"/>
                </div>
            </div>
        </section>
    );
}

export default FourthSection;