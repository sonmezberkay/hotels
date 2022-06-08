import HotelList from "./hotels/HotelList";
import { useState, useEffect } from "react";
import Filter from "./filters/Filter";


const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [loadedHotels, setLoadedHotels] = useState([]);
//   const [loadedRooms, setLoadedRooms] = useState(null);
//   const [loadedRatePlans, setLoadedRatePlans] = useState(null);
//   const [data1, setData1] = useState([]);

//   const [hotelId, setHotelId] = useState();



    useEffect( () => {
        setIsLoading(true);

        const fetchHotels = () => {
            fetch(
              "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
            ).then(response => {
              return response.json();
            }).then(data => {
                // for (let i = 0; i<data.length; i++) {
                //     const hotelid = data[i]['id'];
                //     fetchRooms(hotelid)
                // }
        
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


      
    //   async function fetchRooms (hotelid) {
    //       try {
    //           const res = await fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelid}`)
    //           if (!res.ok) {
    //               throw new Error(res.statusText);
    //           }
    //           const data = await res.json();
    //           //console.log(data)
    //           if(data) {
    //               console.log(hotelid, data)
    //               setData1(data);
    //               setLoadedRooms(data.rooms)
    //               setLoadedRatePlans(data.ratePlans)
    //           }
    //       } catch (err) {
    //           console.log("could not fetch");
    //       }
    //   }

    //   useEffect(() => {
    //     fetchRooms();
    // }, [])

    // console.log('data',data1)
      

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