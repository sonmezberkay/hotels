import Card from "../../ui/Card";
import RoomSizeFilter from "./RoomSizeFilter";
import classes from "./RoomSizeFilter.module.css";
import StarFilter from "./StarFilter";

const Filter = () => {
  return (
    <Card>
        <div className={classes.filters}>
            <StarFilter />
            <RoomSizeFilter />
        </div>
    </Card>
  );
};

export default Filter;