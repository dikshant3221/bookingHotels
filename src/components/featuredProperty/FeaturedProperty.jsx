import '../featuredProperty/featureProperty.css'

const FeaturedProperty = () => {
  return (
    <div className="fp">
    <div className="fpItem">
        <img  className = "fpImg"alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIasKG8EE5cdXC0-d_DiSo49r5KyJSiFgWA&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIasKG8EE5cdXC0-d_DiSo49r5KyJSiFgWA&usqp=CAU"/>
        <span className="fpname"> Yu wasin hotel of Gold</span>
        <span className="fpCity"> Dubai</span>
        <span className="fpPrice"> Staring from 120Euro</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
       <div className="fpItem">
       <img className = "fpImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB37hChmMqQehY1X0u0Jp2fuoRBLXwta8K7A&usqp=CAU"/>
       <span className="fpname"> Yu yu hotel</span>
       <span className="fpCity"> Dubai</span>
       <span className="fpPrice"> Staring from 120Euro</span>
       <div className="fpRating">
           <button>8.9</button>
           <span>Excellent</span>
       </div>
   </div>
   <div className="fpItem">
        <img className = "fpImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrHBcUM9f-9-XYvT2dopvxp3HtVzidfSEOg&usqp=CAU"/>
        <span className="fpname"> Al Mankhol hotel</span>
        <span className="fpCity"> Dubai</span>
        <span className="fpPrice"> Staring from 120Euro</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
    <div className="fpItem">
        <img className = "fpImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjFZP1iNtNVn3PFTfE2D4YRWEZNKpLDW_Qw&usqp=CAU"/>
        <span className="fpname"> Grand Hayat hotel</span>
        <span className="fpCity"> Dubai</span>
        <span className="fpPrice"> Staring from 120Euro</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
    <div className="fpItem">
        <img className = "fpImg" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRqoyAqnEgNYywysoyLmPBPOwnEXybmgXUg&usqp=CAU"/>
        <span className="fpname"> Al wasin hotel</span>
        <span className="fpCity"> Dubai</span>
        <span className="fpPrice"> Staring from 120Euro</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
    </div>
   </div>
  )
}

export default FeaturedProperty;