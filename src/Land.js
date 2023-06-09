
import { Rectangle, Tooltip } from 'react-leaflet'


function Land({ landBounds, landColor, landIndex, onLandClick }) {

  function handleLandClick(landNumber) {
    onLandClick(landNumber);
  }

  return (
    <Rectangle
      bounds={landBounds}
      pathOptions={{ stroke: false, color: landColor, fillOpacity: 1 }}
      eventHandlers={{
        click: () => {
          { handleLandClick(landIndex) }
        },
      }}

    >
      <Tooltip sticky>Land #{landIndex}</Tooltip>
    </Rectangle>
  );
}

export default Land;