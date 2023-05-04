import Link from "next/link";
import React, { useState, useEffect } from 'react';

const SearchResult: React.FC = () => {
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

    useEffect(() => {
        const data = localStorage.getItem('propertyData');
        if (data) {
        setPropertyData(JSON.parse(data));
        }
    }, []);

    console.log('propertyData.media', propertyData[0].media);

  return (
    <div>
        {propertyData.map((property, index) => (
        <div key={index}>
            <br/>
            <br/>
            <p> Demo API, Photos will be blurry for now. </p>
            <p>Address: {property.address}</p>
            <p>Price: {property.askPrice}</p>
            <p>SqFt: {property.sqFt}</p>
            <p>Beds: {property.beds}</p>
            <p>Baths: {property.baths}</p>
            <p>Year Built: {property.yearBuilt}</p>
            <p>Lot Size: {property.lotSize}</p>
            {property.media.map((url, index) => (
                <img src={url} key={index} alt={`Property at ${property.address}`} />
            ))}
        </div>
        ))}
    </div>

  )
}

export default SearchResult;
