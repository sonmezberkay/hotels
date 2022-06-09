import classes from "./RoomSizeFilter.module.css";

const RoomSizeFilter = () => {
    

    const adultNumberHandler = e => {
        console.log(e.target.value);
    };
    
    const childNumberHandler = e => {
        console.log(e.target.value);
    };

  return (
    <div className={classes.size}>
      <form className={classes.form}>
        <label htmlFor="adults">Adult</label>
        <select name="adults" id="adults" onChange={adultNumberHandler}>
          <option>Please Choose</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
      <form className={classes.form2}>
        <label htmlFor="children">Child</label>
        <select name="children" id="children" onChange={childNumberHandler}>
          <option>Please Choose</option>
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
