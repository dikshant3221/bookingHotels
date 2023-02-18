import './hotel.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft,faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';

const Hotel = () => {
  const[slideNumber,setSlideNumber]  = useState(0);
  const[open  ,setOpen]  = useState(false);
  const photos = [
    {
      src: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src:"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
    }

  ];
  const handleOpen = (i)=>{
    setSlideNumber(i);
   setOpen(true);
  }
  const handleMove = (direction)=>{
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0?3:slideNumber-1;
    }else{
      newSlideNumber = slideNumber === 3?0:slideNumber+1;
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotelContainer'>
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt = "" className='sliderImg'/>
            </div> 
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Grand Hotel</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className='hotelDistance'>
            Excellent location -500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $113 at this property and get a free airpot taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo,i) => (
              <div key={photo.src} className='hotelImgWrapper'>
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                located a 5 minutes walk from St. Florian gate in krakow . tower street apartments has accomodation wit air consitioning and free wifi. the units come with hadwood floorsand feature a fullt equipped
                kitchenette with a microwave, a flat-scren sdvkasndbvadsf  ads ga s as as dhas dghas dh asdhasdh as dhsafdhasdhashd as hd.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow , this property has an excellent location score of 9.8!

              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button> Reserver or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
export default Hotel;
