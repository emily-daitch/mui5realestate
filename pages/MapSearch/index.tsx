import dynamic from "next/dynamic";
import { MapSearchForm } from "../../components/MapSearchForm";
import { Typography, Box, Grid } from "@mui/material";
import Image from "next/image"

const MapComponent = dynamic(
  () => {
    return import("../../components/mapSearch");
  },
  { ssr: false }
);

const MapSearch = () => {
  return (
    <div style={{paddingTop: '70px'}}>
      <br/>
      <Grid container>
        <Grid item xs={
          12
        } md={6}>
          <MapComponent></MapComponent>
        </Grid>
        <Grid item xs={
          12
        } md={6}>
          <MapSearchForm></MapSearchForm>
          <Image alt="logo" src='/PA house logo.png' layout='intrinsic' height={306} width={1078}></Image>
        </Grid>
      </Grid>
    </div>

  )
}

export default MapSearch;