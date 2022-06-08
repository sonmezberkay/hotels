import RoomsList from "./RoomsList";

import { useEffect, useState } from "react";

const Rooms = () => {
  const [data1, setData1] = useState(null);
  const [rooms1, setRooms1] = useState(null);
  const [ratePlans1, setRatePlans1] = useState(null);

  let URL = "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/OBMNG";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL + 1);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        if(data) {
          setData1(data);
          setRooms1(data.rooms)
          setRatePlans1(data.ratePlans)
        }
      } catch (err) {
        console.log("could not fetch");
      }
    };

    fetchData();
  }, [URL]);

 
  if(rooms1 && ratePlans1) {
    // console.log('rooms:', rooms1.slice(0,3));
    // console.log('ratePlans:',ratePlans1.slice(0,3));
  }

  return (
    <section>
      {data1 && <RoomsList rooms={rooms1.slice(0,3)} ratePlans={ratePlans1} />}
    </section>
  );
};

export default Rooms;
