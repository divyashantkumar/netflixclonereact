import BrowseMain from "./BrowseMain";
import HeaderContent from "./HeaderContent";
import NavigationBar from "./NavigationBar";

function BrowseBeforeLogin() {
    return (
        <>
            <NavigationBar page="browse" />
            <div style={{backgroundColor:"rgb(22, 22, 22)"}}>
            <HeaderContent page="browse" />
            <BrowseMain />
            </div>
           
        </>

    );
}

export default BrowseBeforeLogin;