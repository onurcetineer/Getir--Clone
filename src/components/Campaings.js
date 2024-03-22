import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json"


export default function Campaings (){

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners);
    })

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };


    return (
        <div className="container mx-auto py-8">
            <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
            <Slider className="-mx-2" {...settings}>
                {banners.length && banners.map((banner, index) => (
                    <div key={banner.id} className="px-2">
                        <img src={banner.image} className="rounded-lg"/>
                    </div>
                ) )}
            </Slider>
        </div>
    )
}