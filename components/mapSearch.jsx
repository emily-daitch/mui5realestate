import React, { useRef, useState } from 'react';
import { DrawingManager, GoogleMap, Polygon, useJsApiLoader } from '@react-google-maps/api';
import { Button, Typography } from '@mui/material';
import {useRouter} from 'next/router'

const libraries = ['places', 'drawing'];
const MapComponent = () => {

	const mapRef = useRef();
	const polygonRefs = useRef([]);
	const activePolygonIndex = useRef();
	const drawingManagerRef = useRef();

	const { isLoaded } = useJsApiLoader({
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

	const defaultCenter = {
		lat: 33.7488,
		lng: -84.3877,
	}
	const [center, setCenter] = useState(defaultCenter);

	const containerStyle = {
		width: '100%',
		height: '500px',
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
		},
	}

	const onLoadMap = (map) => {
		mapRef.current = map;
	}

	const onLoadPolygon = (polygon, index) => {
		polygonRefs.current[index] = polygon;
	}

	const onClickPolygon = (index) => {
		activePolygonIndex.current = index; 
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
			setPolygonsLocally([...polygons, newPolygon]);
		}
	}

	const onDeleteDrawing = () => {  
		const filtered = polygons.filter((polygon, index) => index !== activePolygonIndex.current) 
		setPolygonsLocally(filtered)
	}

	const onEditPolygon = (index) => {
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

	return (
		isLoaded
			?
			<div className='map-container' style={{ position: 'relative', paddingBottom: '10px'}}>
				<Typography>Choose by regions:</Typography>
				<Button onClick={chooseDowntown} color={'secondary'} variant={"outlined"} sx={{borderRadius: '0px', margin: '5px'}}>Downtown</Button>
				<Button onClick={chooseTucker} color={'secondary'} variant={"outlined"} sx={{borderRadius: '0px', margin: '5px'}}>Tucker</Button>
				{
					drawingManagerRef.current
                    &&
                    <Button
                    	onClick={onDeleteDrawing}
                    	variant={"outlined"} sx={{borderRadius: '0px', margin: '5px', color: '#333333', borderColor: '#111111'}}
                    >
                    Delete Selected Shape
                    </Button>
				}
				{/* <Typography>Click the polygon at the top center of the map to draw a custom region.</Typography> */}
				{/* <button onClick={searchFromMap}>Search Selection for Homes</button> */}
				<GoogleMap
					zoom={11}
					center={center}
					onLoad={onLoadMap}
					mapContainerStyle={containerStyle}
					options={{mapTypeControl: false, streetViewControl: false}}
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
				</GoogleMap>
			</div>
			:
			null
	);
}

export default MapComponent; 