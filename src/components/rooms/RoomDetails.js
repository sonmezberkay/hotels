import classes from "./RoomDetails.module.css";

const RoomDetails = (props) => {

    const {disabledAccess} = props;



    let isDisabledAccessable;

    if (disabledAccess) {
      isDisabledAccessable = 'YES';
    } else {
      isDisabledAccessable = 'NO';
    }

    

  return (
    <li className={classes.item}>
      <div className={classes.left}>
        <h3 className={classes.name}>{props.name} Room</h3>
        <h4 className={classes.occupancy}>Adults: {props.occupancy.maxAdults}</h4>
        <h4 className={classes.occupancy}>Children: {props.occupancy.maxChildren}</h4>
      </div>
      <div className={classes.right}>
          <p className={classes['longDescription']}>{props.longDescription}</p>
            <div className={classes['right-bottom']}>
              <h4 className={classes.bed}>Bed Configuration: {props.bedConfiguration}</h4>
              <h4 className={classes.access}>Accessible for Disabled: {isDisabledAccessable}</h4>
            </div>
      </div>
    </li>
  );
};

export default RoomDetails;
