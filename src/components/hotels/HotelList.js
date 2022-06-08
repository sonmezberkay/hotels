import HotelItem from "./HotelItem";
import classes from "./HotelList.module.css";

const HotelList = (props) => {
  return (
    <div>
      <ul className={classes.list}>
        {props.hotels.map((hotel) => (
          <HotelItem
            key={hotel.id}
            id={hotel.id}
            image={hotel.images}
            name={hotel.name}
            address1={hotel.address1}
            address2={hotel.address2}
            postcode={hotel.postcode}
            town={hotel.town}
            country={hotel.country}
            countryCode={hotel.countryCode}
            starRating={hotel.starRating}
            telephone={hotel.telephone}
            email={hotel.email}
            checkInHours={hotel.checkInHours}
            checkInMinutes={hotel.checkInMinutes}
            checkOutHours={hotel.checkOutHours}
            checkOutMinutes={hotel.checkOutMinutes}
            description={hotel.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
