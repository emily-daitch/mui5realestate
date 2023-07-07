import React, { useRef, useState } from 'react';
import { Autocomplete, DrawingManager, GoogleMap, Polygon, useJsApiLoader } from '@react-google-maps/api';
import { Button, Typography } from '@mui/material';
import {useRouter} from 'next/router'

const libraries = ['places', 'drawing'];
const MapComponent = () => {
    const router = useRouter();

    const mapRef = useRef();
    const polygonRefs = useRef([]);
    const activePolygonIndex = useRef();
    const autocompleteRef = useRef();
    const drawingManagerRef = useRef();

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_JS_KEY,
        libraries
    });

    const setPolygonsLocally = ((polygons) => {
        setPolygons(polygons);
        localStorage.setItem('polygons', JSON.stringify(polygons));
    });

    const [polygons, setPolygons] = useState([

    ]);

    const chooseDowntown = (() => {
        setPolygonsLocally([...polygons,
            [
                {lat: 33.72578832180524, lng: -84.4286755622968},
                {lat: 33.77831215085529, lng: -84.4286755622968},
                {lat: 33.77859751852991, lng: -84.34250155106633},
                {lat: 33.72635940593172, lng: -84.34147158280462},
                {lat: 33.72578832180524, lng: -84.4286755622968}
            ]
        ])
    });

    const chooseTucker = (() => {
        setPolygonsLocally([...polygons,
            [
                {lat: 33.877154222103655, lng: -84.24965057559575},
                {lat: 33.877154222103655, lng: -84.18304596133794},
                {lat: 33.8278283295276, lng: -84.18304596133794},
                {lat: 33.8278283295276, lng: -84.25171051211919},
                {lat: 33.877154222103655, lng: -84.24965057559575}
            ]
        ])
    });

    // const getPropertyData = async () => {
    //     const propertyType = 'Residential';
    //     const beds = 1;
    //     const baths = 1;
    //     const polygonString = ``;
    //     for(let coordinate of polygons[0]){
    //         polygonString += coordinate.lat;
    //         polygonString += ' ';
    //         polygonString += coordinate.lng;
    //         polygonString += ',';
    //     }
    //     polygonString = polygonString.slice(0, -1);
    //     console.log('polygonString', polygonString);

    //     const url = 'https://api.bridgedataoutput.com/api/v2/OData/actris_ref/' +
    //       `Property?$filter=PropertyType eq \'${propertyType}\' ` +
    //       //geo.intersects is failing with "Coordinates" from the documentation - will need to determine the correct syntax
    //       //`and geo.intersects(Coordinates,POLYGON((${polygonString}))) ` +
    //       `and PostalCode eq \'78704\' ` + // For now, the zip we know has results from the test server
    //       `and StandardStatus eq \'Active\' ` +
    //       `and BedroomsTotal ge ${beds} ` +
    //       `and BathroomsFull ge ${baths} ` +
    //       `and ListPrice ge 100000 ` +
    //       `and ListPrice le 800000 `;
    //     const urlWithSpaces = url.replace(/%20/g, ' ');
      
    //     const response = await fetch(urlWithSpaces, {
    //       method: 'GET',
    //       headers: {
    //         'Accept': 'application/json',
    //         //'Authorization': `Bearer ${process.env.BRIDGE_SECRET}`
    //         //For local development
    //         'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BRIDGE_SECRET}`
    //       },
    //     });
      
    //     if (response.ok) {
    //       const jsonResponse = await response.json();
    //       console.log(jsonResponse);
    //       return jsonResponse;
    //     } else {
    //       console.error(`Error fetching data: ${response.status} ${response.statusText}`);
    //       return null;
    //     }
    //   };

    // const searchFromMap = async () => {
    
    //     console.log('getting property data');
    //     const pData = await getPropertyData();
    //     //e.preventDefault();
    //     const pDataSubsetArray = pData.value.map((home) => {
    //       const photos = home.Media.map((media) => {
    //         return media.MediaURL;
    //       })
    //       return {
    //         address: home.UnparsedAddress,
    //         lastSoldPrice: 0,
    //         askPrice: home.ListPrice,
    //         sqFt: home.LotSizeSquareFeet,
    //         beds: home.BedroomsTotal,
    //         baths: home.BathroomsFull + home.BathroomsHalf*.5,
    //         yearBuilt: home.YearBuilt,
    //         lotSize: home.LotSizeAcres,
    //         predictedValue: 0,
    //         media: photos
    //       }
    //     });
    //     console.log('pDataSubsetArray', pDataSubsetArray);
    
    //     localStorage.setItem('propertyData', JSON.stringify(pDataSubsetArray));
    //     router.push("searchResult/searchResult");
    //   };

    const defaultCenter = {
        lat: 33.7488,
        lng: -84.3877,
    }
    const [center, setCenter] = useState(defaultCenter);

    const containerStyle = {
        width: '100%',
        height: '500px',
    }

    const autocompleteStyle = {
        boxSizing: 'border-box',
        border: '1px solid transparent',
        width: '240px',
        height: '38px',
        padding: '0 12px',
        borderRadius: '3px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
        fontSize: '14px',
        outline: 'none',
        textOverflow: 'ellipses',
        position: 'absolute',
        right: '8%',
        top: '11px',
        marginLeft: '-120px',
    }

    const polygonOptions = {
        fillOpacity: 0.3,
        fillColor: '#ff0000',
        strokeColor: '#ff0000',
        strokeWeight: 2,
        draggable: true,
        editable: true
    }

    const drawingManagerOptions = {
        polygonOptions: polygonOptions,
        drawingControl: true,
        drawingControlOptions: {
            position: window.google?.maps?.ControlPosition?.TOP_CENTER,
            drawingModes: [
                window.google?.maps?.drawing?.OverlayType?.POLYGON
            ]
        }
    }

    const onLoadMap = (map) => {
        mapRef.current = map;
    }

    const onLoadPolygon = (polygon, index) => {
        console.log('onLoadPolygon', index);
        polygonRefs.current[index] = polygon;
    }

    const onClickPolygon = (index) => {
        console.log('onClickPolygon', index);
        activePolygonIndex.current = index; 
    }

    const onLoadAutocomplete = (autocomplete) => {
        console.log('onLoadAutocomplete');
        autocompleteRef.current = autocomplete;
    }

    const onPlaceChanged = () => {
        const { geometry } = autocompleteRef.current.getPlace();
        const bounds = new window.google.maps.LatLngBounds();
        if (geometry.viewport) {
            bounds.union(geometry.viewport);
        } else {
            bounds.extend(geometry.location);
        }
        mapRef.current.fitBounds(bounds);
    }

    const onLoadDrawingManager = drawingManager => {
        drawingManagerRef.current = drawingManager;
    }

    const onOverlayComplete = ($overlayEvent) => {
        drawingManagerRef.current.setDrawingMode(null);
        if ($overlayEvent.type === window.google.maps.drawing.OverlayType.POLYGON) {
            const newPolygon = $overlayEvent.overlay.getPath()
                .getArray()
                .map(latLng => ({ lat: latLng.lat(), lng: latLng.lng() }))

            // start and end point should be same for valid geojson
            const startPoint = newPolygon[0];
            newPolygon.push(startPoint);
            $overlayEvent.overlay?.setMap(null);
            console.log('onOverlayComplete polygon', newPolygon);
            setPolygonsLocally([...polygons, newPolygon]);
        }
    }

    const onDeleteDrawing = () => {  
        const filtered = polygons.filter((polygon, index) => index !== activePolygonIndex.current) 
        setPolygonsLocally(filtered)
    }

    const onEditPolygon = (index) => {
        console.log('onEditPolygon');
        const polygonRef = polygonRefs.current[index];
        if (polygonRef) {
            const coordinates = polygonRef.getPath()
                .getArray()
                .map(latLng => ({ lat: latLng.lat(), lng: latLng.lng() }));

            const allPolygons = [...polygons];
            allPolygons[index] = coordinates;
            setPolygonsLocally(allPolygons)
        }
    }

    console.log('polygons from return', polygons);
    console.log('polygon refs from return', polygonRefs);

    return (
        isLoaded
            ?
            <div className='map-container' style={{ position: 'relative' }}>
                <Typography>Choose by regions:</Typography>
                <Button onClick={chooseDowntown} variant={"outlined"} sx={{borderRadius: '0px', margin: '5px'}}>Downtown</Button>
                <Button onClick={chooseTucker} variant={"outlined"} sx={{borderRadius: '0px', margin: '5px'}}>Tucker</Button>
                {
                    drawingManagerRef.current
                    &&
                    <Button
                        onClick={onDeleteDrawing}
                        variant={"outlined"} sx={{borderRadius: '0px', margin: '5px'}}
                    >
                    Delete Selected Shape
                    </Button>
                }
                <Typography>Click the polygon at the top center of the map to draw a custom region.</Typography>
                {/* <button onClick={searchFromMap}>Search Selection for Homes</button> */}
                <GoogleMap
                    zoom={11}
                    center={center}
                    onLoad={onLoadMap}
                    mapContainerStyle={containerStyle}
                    onTilesLoaded={() => setCenter(null)}
                >
                    <DrawingManager
                        onLoad={onLoadDrawingManager}
                        onOverlayComplete={onOverlayComplete}
                        options={drawingManagerOptions}
                    />
                    {
                        polygons.map((iterator, index) => (
                            <Polygon
                                key={index}
                                onLoad={(event) => onLoadPolygon(event, index)}
                                onMouseDown={() => onClickPolygon(index)}
                                onMouseUp={() => onEditPolygon(index)}
                                onDragEnd={() => onEditPolygon(index)}
                                options={polygonOptions}
                                paths={iterator}
                                draggable
                                editable
                            />
                        ))
                    }
                    <Autocomplete
                        onLoad={onLoadAutocomplete}
                        onPlaceChanged={onPlaceChanged}
                    >
                        <input
                            type='text'
                            placeholder='Search Location'
                            style={autocompleteStyle}
                        />
                    </Autocomplete>
                </GoogleMap>
            </div>
            :
            null
    );
}

export default MapComponent; 