//import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const SearchedHotels = () => {

    const [loadedHotels, setLoadedHotels] = useState([]);

    // const queryString = useLocation().search;
    // const queryParams = new URLSearchParams(queryString);
    // const query = queryParams.get('q');


    useEffect( () => {
        const fetchHotels = () => {
            fetch(
              "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
            ).then(response => {
              return response.json();
            }).then(data => {
                const hotels = [];
        
                for (const key in data) {
                  const hotel = {
                    id: key,
                    ...data[key]
                  };
                  hotels.push(hotel);
                }
                setLoadedHotels(hotels)
            });
        };
        

        fetchHotels();
      }, []);

      

      return (
        <section>
        
        </section>
        )

}
export default SearchedHotels;