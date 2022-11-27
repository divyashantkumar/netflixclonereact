import NavigationBar from "./NavigationBar";
import '../style/header.css';
import HeaderContent from "./HeaderContent";

function Header() {
    return (
        <div className='header'>
            <NavigationBar page="landing" />
            <div className='headerImage'>
                <img src="https://github.com/DivyashantKumar/netflixAssets/blob/main/images/headerImage.jpg?raw=true" />
            </div>
            <HeaderContent page="landing" />
        </div>
    );
}

export default Header;