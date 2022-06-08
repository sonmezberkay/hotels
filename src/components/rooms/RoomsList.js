import classes from "./RoomsList.module.css";
import RoomDetails from "./RoomDetails";

const RoomsList = (props) => {
  return (
    <ul className={classes.list}>
      {props.rooms.map((room) => (
        <RoomDetails
          key={room.id}
          id={room.id}
          image={room.images}
          name={room.name}
          longDescription={room.longDescription}
          occupancy={room.occupancy}
          disabledAccess={room.disabledAccess}
          bedConfiguration={room.bedConfiguration}
          facilities={room.facilities}
        />
      ))}
    </ul>
  );
};

export default RoomsList;
