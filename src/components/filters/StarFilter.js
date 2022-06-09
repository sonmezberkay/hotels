import { faStar, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import classes from "./StarFilter.module.css";


const StarFilter = (props) => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);


  const clickHandler = (value) => {
    setCurrentValue(value);
  };

  const mouseOverHandler = (value) => {
    setHoverValue(value);
  };

  const mouseLeaveHandler = (value) => {
    setHoverValue(undefined);
  };

  const rate = currentValue;

  const submitHandler = (e) => {
    e.preventDefault();
    props.onFilter(rate);

  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.star}>
        {stars.map((_, index) => {
          return (
            <FontAwesomeIcon
              icon={faStar}
              key={index}
              className={classes.icon}
              color={(hoverValue || currentValue) > index ? 'orange' : 'grey'}
              onClick={() => clickHandler(index + 1)}
              onMouseOver={() => mouseOverHandler(index + 1)}
              onMouseLeave={mouseLeaveHandler}
            />
          );
        })}
      </div>
      <button className={classes.btn}><FontAwesomeIcon icon={faCheck} /></button>
      </form>
    </div>
  );
};

export default StarFilter;
