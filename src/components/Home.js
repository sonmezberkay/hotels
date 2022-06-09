import HotelList from "./hotels/HotelList";
import { useState, useEffect, useCallback } from "react";
import Filter from "./filters/Filter";


const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [loadedHotels, setLoadedHotels] = useState([]);
  const [loadedRooms1, setLoadedRooms1] = useState([]);
  //const [loadedRatePlans1, setLoadedRatePlans1] = useState(null);
  //const [data1, setData1] = useState([]);


   const [hotelId, setHotelId] = useState([]);



    useEffect( () => {
        setIsLoading(true);

        const fetchHotels = () => {
            fetch(
              "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
            ).then(response => {
              return response.json();
            }).then(data => {
                 for (let i = 0; i<data.length; i++) {
                     const hotelid = data[i]['id'];
                     setHotelId(prevId => prevId.concat(hotelid))
                 }
        
                const hotels = [];
        
                for (const key in data) {
                  const hotel = {
                    id: key,
                    ...data[key]
                  };
                  hotels.push(hotel);
                }
        
                setIsLoading(false);
                setLoadedHotels(hotels)
            });
        };

        fetchHotels();
      }, []);

      if(hotelId.length === 4) {
        console.log('hotel IDs', hotelId)
        
      }



    //     const fetchRooms = useCallback ( async () => {
    //      if (hotelId.length === 4) {
    //        try {
    //            const res = await fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId[0]}`)
    //            if (!res.ok) {
    //                throw new Error(res.statusText);
    //            }
    //            const data = await res.json();
    //            //console.log(data)
    //            if(data) {
    //                //console.log(data)
    //                setData1(data);
    //                setLoadedRooms1(data.rooms)
    //                //setLoadedRatePlans1(data.ratePlans)
    //          }
    //        } catch (err) {
    //            console.log("could not fetch");
    //        }
    //    }
    //      }, [hotelId])
    //      console.log('rooms1: ', loadedRooms1)

    //    useEffect(() => {
    //      fetchRooms();
    //  }, [fetchRooms])




    if(isLoading) {
     return (<section>
       <p>Loading...</p>
    </section>);
    }
    

    return (
    <section>
      <Filter />
      <HotelList hotels={loadedHotels} />
    </section>
    )
};

export default Home;