import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return (
    <> 
        <div className="w-full h-30 px-2">
            <img
                className="w-full h-full rounded-xl" 
                src={props.src}
                alt="entertainment image"
            />
        </div>
    </>
  );
}; 

const EntertainmentCardSlider = () => {
    const EntertainmentImage = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bookmyshow.com/explore/upskill-gwalior?referrerBase=",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/cooking-collection-202007222211.png",
        "https://in.bookmyshow.com/explore/gaming-gwalior?referrerBase=",
        "https://in.bookmyshow.com/explore/arts-and-crafts-workshops-gwalior?referrerBase=",
    ];

    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        infinite: true,
        responsive: [
        {
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: 1,
            },
        },
        {
            breakpoints: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
      ],
    };

    return (
    <> 
        <slider {...settings} >
             {
                 EntertainmentImage.map((image) => (
                 <EntertainmentCard src={image} />
                ))
             }
        </slider>
    </>
  );
};

export default EntertainmentCardSlider;

