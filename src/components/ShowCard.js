import '../styles/ShowCard.css';
function ShowCard({band_name,date,location,picture,buyTicket}){
    return (
        <div className="show-card">
            <img src={picture} alt="Show" className="show-image"/>
            <div className="show-details">
                <p className="show-band"> {band_name}</p>
                <p className="show-date"><label> Date: </label>{date}</p>
                <p className="show-location"><label> Location: </label>{location}</p>
                <button className="buy-ticket" onClick={buyTicket}> Buy Ticket </button>
            </div>
        </div>

    )

}

export default ShowCard;