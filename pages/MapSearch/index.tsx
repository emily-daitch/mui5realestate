import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => {
    return import("./mapSearch");
  },
  { ssr: false }
);

const MapSearch = () => {
  return (
    <div style={{paddingTop: '70px'}}>
      <MapComponent></MapComponent>
    </div>

  )
}

export default MapSearch;