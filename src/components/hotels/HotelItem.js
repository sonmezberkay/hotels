import Card from "../../ui/Card";
import classes from "./HotelItem.module.css";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Rooms from "../rooms/Rooms";

function HotelItem(props) {
  const [imageCounter, setImageCounter] = useState(0);

  const imageIncreaseHandler = () => {
    if (props.image.length === imageCounter + 1) {
      setImageCounter(0);
    } else {
      setImageCounter((prevImageCounter) => prevImageCounter + 1);
    }
  };


  const imageDecreaseHandler = () => {
    if (imageCounter === 0) {
      setImageCounter(2);
    } else {
      setImageCounter((prevImageCounter) => prevImageCounter - 1);
    }
  };


  let starRating;

  const starIcon = <FontAwesomeIcon icon={faStar} className={classes['yellow-star']} />;
  const starIconWhite = <FontAwesomeIcon icon={faStar} className={classes['white-star']} />;

  if (props.starRating === '1') {
    starRating = (
    <div>
        {starIcon}
        {starIconWhite}
        {starIconWhite}
        {starIconWhite}
        {starIconWhite}
    </div>)
  }
  if (props.starRating === '2') {
    starRating = (
        <div>
            {starIcon}
            {starIcon}
            {starIconWhite}
            {starIconWhite}
            {starIconWhite}
        </div>)
  }
  if (props.starRating === '3') {
    starRating = (
    <div>
        {starIcon}
        {starIcon}
        {starIcon}
        {starIconWhite}
        {starIconWhite}
    </div>)
  }
  if (props.starRating === '4') {
    starRating = (
    <div>
        {starIcon}
        {starIcon}
        {starIcon}
        {starIcon}
        {starIconWhite}
    </div>)
  }
  if (props.starRating === '5') {
starRating = (
    <div>
        {starIcon}
        {starIcon}
        {starIcon}
        {starIcon}
        {starIcon}
</div>)
  }

  



  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.hotel}>
          <div className={classes.image}>
          {props.image.length > 1 && <FontAwesomeIcon
              icon={faArrowLeft}
              className={classes.leftIcon}
              onClick={imageDecreaseHandler}
            />}
            <img src={props.image[imageCounter].url} alt={props.title}></img>
            {props.image.length > 1 && <FontAwesomeIcon
              icon={faArrowRight}
              className={classes.rightIcon}
              onClick={imageIncreaseHandler}
            />}
          </div>
          <div className={classes.content}>
            <h3>{props.name}</h3>
            <address>
              {props.address1}, {props.town}, {props.country}
            </address>
            <address>
              {props.postcode}, {props.countryCode}
            </address>
            <div className={classes.bottom}>
              <div className={classes.left}>
                  <h4 className={classes.phonetitle}>Contact Phone:</h4> 
                <p className={classes.phone}>
                {props.telephone}
                </p>
                  <h4 className={classes.emailtitle}>E-mail:</h4>
                <p className={classes.email}>
                  {props.email}
                </p>
              </div>
              <div className={classes.right}>
                <div className={classes.checkin}>
                  <h4>Check-in Hours:</h4>
                  {props.checkInHours}:{props.checkInMinutes}
                </div>
                <div className={classes.checkout}>
                  <h4>Check-out Hours:</h4>
                  {props.checkOutHours}:{props.checkOutMinutes}
                </div>
              </div>
            </div>
          </div>
            <div className={classes.rate}>
                <h4>Rating</h4>
                    {starRating}
            </div>
        </div>
        <div className={classes.description}>
            <p>{props.description}</p>
       </div>

       <Rooms /> 
      </Card>
    </li>
  );
}

export default HotelItem;