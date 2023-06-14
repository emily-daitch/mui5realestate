import React, { useState, useEffect } from 'react';
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

type PropertyMedia = {
  url: string
}

const gallery = [
  { id: 1, imgUrl: "/1.jpg" },
  { id: 2, imgUrl: "/2.jpg" },
  { id: 3, imgUrl: "/3.jpg" },
  { id: 4, imgUrl: "/4.jpg" },
];

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
          <Box sx={{ p: 3, width: "60vw"}} >
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
                media: ['http://fake-url'
                ]
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

    console.log('propertyData.media', propertyData[0]?.media);

return (
  <div style={{marginTop: 70}}>
    {isMobile 
      ? <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Summary list of results */}
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
        }}
        >
            {property.address}<br/>
            ${property.askPrice}<br/>
            Address: {property.address}<br/>
            Price: {property.askPrice}<br/>
            SqFt: {property.sqFt}<br/>
            Beds: {property.beds}<br/>
            Baths: {property.baths}<br/>
            Year Built: {property.yearBuilt}<br/>
            Lot Size: {property.lotSize}<br/>
              <br/>The test data server responds with blurry pictures, unfortunately.
              <Carousel>
                {
                  property.media.map((item, index) => {
                    console.log('image url', item);
                    return (
                      <div key={index}>
                        <img 
                          src={item}
                          loading="lazy"
                          alt={'home image'}
                        />
                      </div>
                    )
                  })
                }
              </Carousel>
            </Paper>
        ))}
        </Box>
        </div> 
      : <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Summary list of results */}
        <Box
          sx={{
          flex: 1,
          width: "100%",
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
              onClick={() => {
                console.log('selected property', property);
                setSelectedProperty(property);
              }}
            >
              <p>Addressy: {property.address}</p>
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
              The test data server responds with blurry pictures, unfortunately.
              <p>Address: {selectedProperty.address}</p>
              <p>Price: {selectedProperty.askPrice}</p>
              <p>SqFt: {selectedProperty.sqFt}</p>
              <p>Beds: {selectedProperty.beds}</p>
              <p>Baths: {selectedProperty.baths}</p>
              <p>Year Built: {selectedProperty.yearBuilt}</p>
              <p>Lot Size: {selectedProperty.lotSize}</p>
              {selectedProperty?.media[0] ? 
              <Image
                src={`${selectedProperty?.media[0]}`}
                layout="responsive"
                width= "400"
                height= "300"
                objectFit="contain"
                loading="lazy"
                alt={'home image'}
              /> : <>Photo</>}
            </TabPanel>
            <TabPanel value={tab} index={1}>
              The test data server responds with blurry pictures, unfortunately.
              <Carousel>
                {
                  selectedProperty.media.map((item, index) => {
                    console.log('image url', item);
                    return (
                      <div key={index}>
                        <img 
                          src={item}
                          loading="lazy"
                          alt={'home image'}
                        />
                      </div>
                    )
                  })
                }
              </Carousel>
            </TabPanel>
          </div>
        )}
      </div>
    }
  </div>
);

}

export default SearchResult;
