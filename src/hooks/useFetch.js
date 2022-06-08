import { useState, useEffect } from "react";

export const useFecth = (id) => {

    let URL = "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/OBMNG"


    useEffect( () => {
        fetch(
          URL + 1
        ).then(response => {
          return response.json();
        }).then(data => {
    
            const rooms = [];
    
            for (const key in data) {
              const room = {
                id: key,
                ...data[key]
              };
              
              rooms.push(room);
            }
    
            setLoadedRooms(rooms)
        });
      }, []);

      console.log(loadedHotel1Rooms);

      return {data};
};