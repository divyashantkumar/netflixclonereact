import '../style/headerContent.css';

function HeaderContent(props) {
    return (
        props.page === "landing"?
        <div className="headerText">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email address" aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">Get Started&nbsp;
                    <svg width="20" height="20" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                        <desc>chevron</desc>
                        <path d="M 0.61 1.312 l 0.78 -0.624 L 5.64 6 l -4.25 5.312 l -0.78 -0.624 L 4.36 6 Z"
                            fill="white" />
                    </svg>
                </span>
            </div>
        </div>: props.page === 'browse' ?
        
        <div className='browseHeaderText'>
            <h1>Netflix Originals</h1>
            <p>Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, it’s all tailored specifically to you.</p>
        </div> :
        <></>
    );
}

export default HeaderContent;