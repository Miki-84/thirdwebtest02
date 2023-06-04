
import { Rectangle } from 'react-leaflet'

function Land({landBounds, landColor, landIndex}) {
    return (
        <Rectangle  
            bounds={landBounds} 
            pathOptions={{color: landColor}} 
            eventHandlers={{
                click: () => {
                  alert('Land ' + landIndex + ' clicked')
                },
              }}
        />
      );
}

export default Land;