import { useEffect, useState } from 'react';
import { MapContainer} from 'react-leaflet'
import { ThreeDots } from 'react-loader-spinner'

import * as L from 'leaflet';
import Land from './Land';


const rectangle = [[50, 50], [108, 170]];
const maxMapBounds = [[0, 0], [108, 192]];

function Map() {
    const [loading, setLoading] = useState(false);
    const [lands, setLands] = useState([]);
    
    const localLands = [];

    useEffect( () => {
        const loadLands = async () => {
            var items;
          setLoading(true);
          console.log("useeffect 1")
          fetch('./maps/test.txt').then(function (response) {
            response.text().then(function (text) {
              items = text.split("\r\n").map(function (el) { return el.split(" "); });
              getLands(items)
              setLoading(false);
            });
          });
        }
        loadLands();
    }, []);

    function getLands(items) {
        var index = 1;
        for (let i = 0; i < 108; i++) {
          for (let j = 0; j < 192; j++) {
            if (items[i][j] === "1") {
              var rectBounds = [[1 * i, 1 * j], [1 * (i + 1), 1 * (j + 1)]]
              localLands.push(<Land key={index} landIndex={index} landBounds={rectBounds} landColor='orange'  />)
              index +=1;
            }
            else {
    
            }
          }
        }
        setLands(localLands)
      }

    return (
        <div>
            {loading ? (
        <>
          <h2>Loading map</h2>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </>)
        :
        (
            <MapContainer
            style={{ width: "960px", height: "540px" }}
            zoom={2}
            center={[50, 50]}
            // scrollWheelZoom={false}
            fadeAnimation={true}
            markerZoomAnimation={true}
            maxBounds={maxMapBounds}
            minZoom={2}
            maxZoom={6}
            crs={L.CRS.Simple}
          >
            {lands}
            {/* <Land landBounds={rectangle} landColor='orange' />
            <Land landBounds={maxMapBounds} landColor='blue' /> */}
          </MapContainer>
        )
      }
            
            
        </div>
      );
}

export default Map;