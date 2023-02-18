import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const Header = ({type}) => {
    const [openDate, setOpenDate] = useState("");
    const [destination, setDestination] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);
    const navigate = useNavigate();

    const handleSearch = ()=>{
        navigate("/hotels",{state:{destination,date,options}})
    }

    const handleOption = (name, operator) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operator === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
        <div className="header">
            <div className={type === "list"?"headerContainer listMode" :"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Plane</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && <>
                <h1 className="headerTitle"> We Miss You</h1>
                <h2 className="headerTitle">Like Desserts Miss the Rain!</h2>
                <p className="headerdesc">
                    Get rewarded for your travels. unlock instant saving of 10% or more with a free booking account
                </p>
                <button className="headerButton">SignIn/Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text"
                            placeholder="where are you going?"
                            className="headerSearchInput"
                            onChange={e=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirsstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult ${options.children} children  ${options.room} RoomNo.`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult </span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button disabled={options.adult <= 0} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room </span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button disabled={options.room <= 0} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick = {()=>handleSearch()}>Search</button>
                    </div>
                </div></>}
            </div>
        </div>
    )
}
export default Header; 
