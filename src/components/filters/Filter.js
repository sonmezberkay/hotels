import Card from "../../ui/Card";
import RoomSizeFilter from "./RoomSizeFilter";
import classes from "./RoomSizeFilter.module.css";
import StarFilter from "./StarFilter";

const Filter = () => {

  const starFilterHandler = (starRate) => {
    console.log(starRate)
  };

  const numberFilterHandler = (adult, child) => {
    console.log(adult, child)
  };

  return (
    <Card>
        <div className={classes.filters}>
            <StarFilter onFilter={starFilterHandler} />
            <RoomSizeFilter onFilter={numberFilterHandler} />
        </div>
    </Card>
  );
};

export default Filter;