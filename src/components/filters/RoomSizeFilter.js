import { useState } from "react";
import classes from "./RoomSizeFilter.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const RoomSizeFilter = (props) => {
    
    const [adult, setAdult] = useState();
    const [child, setChild] = useState();


    const adultNumberHandler = e => {
        setAdult(parseInt(e.target.value));
    };
    
    const childNumberHandler = e => {
      setChild(parseInt(e.target.value));
    };


    const dataPassHandler = () => {
      props.onFilter(adult, child)
    };



  return (
    <div className={classes.size}>
      <form className={classes.form}>
        <label htmlFor="adults">Adult</label>
        <select name="adults" id="adults" onChange={adultNumberHandler}>
          <option selected disabled>Please Choose</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
      <button className={classes.btn} type="submit" onClick={dataPassHandler}><FontAwesomeIcon icon={faCheck} /></button>
      <form className={classes.form2}>
        <label htmlFor="children">Child</label>
        <select name="children" id="children" onChange={childNumberHandler}>
          <option selected disabled>Please Choose</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
    </div>

  );
};

export default RoomSizeFilter;
