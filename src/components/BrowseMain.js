// import ig from './images/children.png';
import '../style/browseMain.css';
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

function BrowseMain(props) {
    const navigate = useNavigate();
    const [sPosition, setSPosition] = useState(0);
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

        if(sPosition === 0) {
            document.getElementById('leftBtn').style.display  = 'none';
        }else if(sPosition === 5179){
            document.getElementById('rightBtn').style.display  = 'none';
        }else {
            document.getElementById('leftBtn').style.display  = 'block';
            document.getElementById('rightBtn').style.display  = 'block';
        } 
    }, [sPosition]);

    function slideLeft() {        
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 1000;
        setSPosition(slider.scrollLeft)
    }

    function slideRight() {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 1000;
        setSPosition(slider.scrollLeft + 1000)
    }

    function handleCard(link) {
        console.log(link.vidId)
        navigate(`/title/${link.vidId}`)
    }

    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div className='videolist' key={index}>
                            {props.page === 'vidDetail' ? <></> :<p>{item.sectionTitle}</p>}
                            <div>
                                <button id='leftBtn' onClick={() => slideLeft()}>&#8249;</button>
                                <div className='listContainer' id='slider'>

                                    {
                                        data[0].videoList.map((item, index) => {
                                            return (
                                                <div className='videoCard' key={index} onClick={() => handleCard(item)}>
                                                    <img src={item.cardImg} width={299} height={168} />
                                                    <p>{item.videoTitle}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <button id='rightBtn' onClick={() => slideRight()}>&#8250;</button>
                            </div>
                        </div>
                    );
                })
            }
        </>

    );
}

export default BrowseMain;