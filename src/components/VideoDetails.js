import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/videoDetails.css"
import { BiPlay } from 'react-icons/bi';
import BrowseMain from "./BrowseMain";

function VideoDetails() {
    const { id } = useParams();
    const [vidDetail, setVidDetail] = useState(null);
    const data = [
        {
            'sectionTitle': 'Popular on Netflix',
            'videoList': [
                {
                    'vidId': '001',
                    'videoTitle': 'Lucifer',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/lucifer.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '002',
                    'videoTitle': 'Mismatched',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/mismatched.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '003',
                    'videoTitle': 'Money Heist',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/moneyHeist.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '004',
                    'videoTitle': 'Maifest',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/manifest.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '005',
                    'videoTitle': 'Stranger Things',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/strangerThings.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '006',
                    'videoTitle': 'All of us are Dead',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/allOfUsAreDead.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '007',
                    'videoTitle': 'Squid Game',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/squidGame.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '008',
                    'videoTitle': 'Lost in Space',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/lostInSpace.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '009',
                    'videoTitle': 'Jamtara',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/jamtara.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '010',
                    'videoTitle': 'Jurassic World : Camp Cretaceous',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/jurassicWorldCampCretaceous.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '011',
                    'videoTitle': 'Oggy And Cockroaches',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/oggyAndCockroaches.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '012',
                    'videoTitle': 'The Sea Beast',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/theSeaBeast.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '013',
                    'videoTitle': 'Never Have I Ever',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/neverHaveIEver.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '014',
                    'videoTitle': 'Phantom Pups',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/phantomPups.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '015',
                    'videoTitle': 'She',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/she.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
                {
                    'vidId': '016',
                    'videoTitle': 'The Baby Boss',
                    'cardImg': "https://github.com/DivyashantKumar/netflixAssets/blob/main/images/theBabyBoss.jpg?raw=true",
                    'video': 'https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4'
                },
            ]
        }
    ]

    useEffect(() => {
        const videoList = data[0].videoList;
        const d = videoList.find((item) => {
            return id === item.vidId;
        })
        setVidDetail(d);
    }, [])

    const sampleVidLink = "https://dkprojects.s3.ap-south-1.amazonaws.com/edurekafolder/samplevVideo/sample-mp4-file.mp4"
    return (
        <div className="detailPageCont">
            <div>
                <div className="vidImgCont">
                    <img className="vidImg" src={vidDetail?.cardImg}/>
                </div>
                <div className="vidHead">
                    <img src="https://github.com/divyashantkumar/assets/blob/main/images/logopng.png?raw=true" alt="logo" width="50" height="50" />
                    <h1>{vidDetail?.videoTitle}</h1>
                    <h3>Availble Now</h3>
                    <p>This is the detail section for the movie {vidDetail?.videoTitle}</p>
                    <button type="button"><BiPlay size={25}/> Play</button>
                    <button type="button">More info</button>
                </div>                
            </div>
            <div className="trendingSec">
                <h1>Trending Now</h1>
                <div className="popularVideos">
                    <BrowseMain page="vidDetail"/>
                </div>
            </div>
            
        </div>
        
    );
}

export default VideoDetails;