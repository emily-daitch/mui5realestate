import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { Box, ImageList, ImageListItem, Paper, Tab, Tabs, Typography } from "@mui/material";
import { url } from "inspector";
import primaryHomePhoto from "../../public/primaryhomephoto.jpg"
import Image from "next/image"

type PropertyData = {
    address: string,
    lastSoldPrice: number,
    askPrice: number,
    sqFt: number,
    beds: number,
    baths: number,
    yearBuilt: number,
    lotSize: number,
    predictedValue: number,
    media: string[]
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }} >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const SearchResult: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [tab, setTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newTab: number) => {
      setTab(newTab);
    };
    useEffect(() => {
        const checkIsMobile = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        checkIsMobile(); // Check initially
    
        // Add a listener for window resize events
        window.addEventListener('resize', checkIsMobile);
    
        // Clean up the listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', checkIsMobile);
        };
      }, []);
    const [propertyData, setPropertyData] = useState(
        [
            {
                address: '',
                lastSoldPrice: 0,
                askPrice: 0,
                sqFt: 0,
                beds: 0,
                baths: 0,
                yearBuilt: 2000,
                lotSize: 0,
                predictedValue: 0,
                media: ['']
            }
        ]
    );
    const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null);

    useEffect(() => {
        const data = localStorage.getItem('propertyData');
        if (data) {
        setPropertyData(JSON.parse(data));
        setSelectedProperty(JSON.parse(data)[0]);
        }
    }, []);

    console.log('propertyData.media', propertyData[0].media);

//   return (
//     <div>
//         {propertyData.map((property, index) => (
//         <div key={index}>
//             <br/>
//             <br/>
//             <p> Demo API, Photos will be blurry for now. </p>
//             <p>Address: {property.address}</p>
//             <p>Price: {property.askPrice}</p>
//             <p>SqFt: {property.sqFt}</p>
//             <p>Beds: {property.beds}</p>
//             <p>Baths: {property.baths}</p>
//             <p>Year Built: {property.yearBuilt}</p>
//             <p>Lot Size: {property.lotSize}</p>
//             {property.media.map((url, index) => (
//                 <img src={url} key={index} alt={`Property at ${property.address}`} />
//             ))}
//         </div>
//         ))}
//     </div>

//   )

return (
  <div style={{marginTop: 70}}>
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        {/* Summary list of results */}
        {/* <div style={{ flex: 1 }}> */}
        <Box
        sx={{
            flex: 1,
            overflowY: 'auto',
            maxHeight: '80vh', // Adjust the max height according to your needs
            padding: 1,
            marginRight: 2,
        }}
        >
        {propertyData.map((property, index) => (
        <Paper
        key={index}
        sx={{
        padding: 2,
        marginBottom: 1,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'action.hover', // Material-UI theme color for hover
            boxShadow: 2, // Increase box shadow on hover
        },
        }}
        onClick={() => setSelectedProperty(property)}
        >
            <p>{property.address}</p>
            <p>${property.askPrice}</p>
            </Paper>
        ))}
        </Box>

        {/* Detailed information and images */}
        {selectedProperty && (
        <div style={{ flex: 2, marginLeft: isMobile ? 0 : 16 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Info" {...a11yProps(0)} />
                <Tab label="Photos" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
            <p>Address: {selectedProperty.address}</p>
            <p>Price: {selectedProperty.askPrice}</p>
            <p>SqFt: {selectedProperty.sqFt}</p>
            <p>Beds: {selectedProperty.beds}</p>
            <p>Baths: {selectedProperty.baths}</p>
            <p>Year Built: {selectedProperty.yearBuilt}</p>
            <p>Lot Size: {selectedProperty.lotSize}</p>
        </TabPanel>
        <TabPanel value={tab} index={1}>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {selectedProperty.media.map((url, index) => (
                //   <img src={url} key={index} alt={`Property at ${selectedProperty.address}`} />

                <ImageListItem key={index}>
                <Image
                    src={`${url}?w=164&h=164&fit=crop&auto=format`}
                    //srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={'home image'}
                    loading="lazy"
                />
                </ImageListItem>
                ))}
            </ImageList>
        </TabPanel>
        {/* {selectedProperty && (
        <div style={{ flex: 2, marginLeft: isMobile ? 0 : 16 }}> */}
            {/* <p>Address: {selectedProperty.address}</p>
            <p>Price: {selectedProperty.askPrice}</p>
            <p>SqFt: {selectedProperty.sqFt}</p>
            <p>Beds: {selectedProperty.beds}</p>
            <p>Baths: {selectedProperty.baths}</p>
            <p>Year Built: {selectedProperty.yearBuilt}</p>
            <p>Lot Size: {selectedProperty.lotSize}</p> */}
            {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {selectedProperty.media.map((url, index) => (
            //   <img src={url} key={index} alt={`Property at ${selectedProperty.address}`} />

            <ImageListItem key={index}>
            <img
                src={`${url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={'home image'}
                loading="lazy"
            />
            </ImageListItem>
            ))}
            </ImageList> */}
        </div>
        )}
    </div>
  </div>
);

}

export default SearchResult;
