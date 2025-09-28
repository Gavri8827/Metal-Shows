import '../styles/ShowCard.css';
import { useNavigate } from "react-router-dom"; // 👈 הוסיפי את זה

function ShowCard({ showId, bandName, showDate, ticketPrice, picture, city, country, street }) {

  const navigate = useNavigate(); // 👈 יוצר פונקציית ניווט

  return (
    <div className="show-card">
      <img src={picture} alt={bandName} className="show-image" />
      <div className="show-details">
        <p className="show-band">{bandName}</p>
        <p className="show-date"><label>Date: </label>{showDate}</p>
        <p className="show-location">
          <label>Location: </label>
          {city && country && street ? `${country}, ${city}, ${street}` : "Unknown"}
        </p>
        <p className="show-price"><label>Price: </label>{ticketPrice} ₪</p>
        <button
          className="buy-ticket"
          onClick={() => navigate(`/shows/${showId}/buy`)} // 👈 עכשיו זה יעבוד
        >
          Buy Ticket
        </button>
      </div>
    </div>
  );
}

export default ShowCard;
