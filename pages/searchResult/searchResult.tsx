import Link from "next/link";

// TODO
// const axios = require('axios');
// const params = {
//   access_key: 'YOUR_ACCESS_KEY',
//   address: '2809 Aiden Ct, College Park, GA 30337',
//   format: 'json'
// }

// axios.get('https://mlsdata.com/api/mls/', {params})
//   .then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error);
//   });

const exampleResponse = {
        "version": "0.1.0",
        "status": "success",
        "error": {},
        "data": {
            "addressSectionInfo": {
                "status": {
                    "displayValue": "Closed",
                    "definition": "This home is sold and off the market.",
                    "longerDefinitionToken": "sold"
                },
                "priceInfo": {
                    "amount": 370000,
                    "label": "Last Sold Price",
                    "displayLevel": 1
                },
                "latestPriceInfo": {
                    "amount": 370000,
                    "label": "Last Sold Price",
                    "displayLevel": 1
                },
                "sqFt": {
                    "displayLevel": 1,
                    "value": 2324
                },
                "pricePerSqFt": 179,
                "streetAddress": {
                    "streetNumber": "4692",
                    "directionalPrefix": "",
                    "streetName": "Pamler June",
                    "streetType": "Ct",
                    "directionalSuffix": "",
                    "unitType": "",
                    "unitValue": "",
                    "addressDisplayLevel": {
                        "displayLevel": 1,
                        "displayText": "",
                        "dataSourceId": 82
                    },
                    "assembledAddress": "4692 Pamler June Ct",
                    "includeStreetNumber": true,
                    "includeUnitNumber": true,
                    "includeStreetName": true,
                    "fullText": "4692 Pamler June Ct"
                },
                "latLong": {
                    "latitude": 33.8633228,
                    "longitude": -84.1968123
                },
                "beds": 4,
                "baths": 3,
                "yearBuilt": 1968,
                "city": "Tucker",
                "state": "GA",
                "zip": "30084",
                "countryCode": "US",
                "soldDate": 1628233200000,
                "soldDateTimeZone": "US/Eastern",
                "lotSize": 26136,
                "fips": "13089",
                "apn": "18 255 02 033",
                "hasOpen": false,
                "hasAgc": false,
                "avmInfo": {
                    "displayLevel": 1,
                    "propertyId": 23811520,
                    "predictedValue": 415849.49
                },
                "searchStatus": 4,
                "propertyType": 6,
                "listingType": 1,
                "isMappable": true,
                "userCanShare": true,
                "riftDataSource": "mls",
                "homeStatusLabel": "Off Market",
                "numFullBaths": 3,
                "staticMapUrl": "https://shortened.url",
                "url": "/GA/Tucker/4692-Pamler-June-Ct-30084/home/23811520",
                "primaryPhotoUrl": "https://shortened.url",
                "rawHalfBaths": 0,
                "rawFullBaths": 3,
                "streetView": {
                    "streetViewUrl": "https://shortened.url"
                }
            },
            "mediaBrowserInfo": {
                "scans": [],
                "sashes": [
                    {
                        "sashType": 14,
                        "sashTypeId": 14,
                        "sashTypeName": "Off Market",
                        "sashTypeColor": "#5D8ACB",
                        "isCakeMLS": false,
                        "openHouseText": "",
                        "lastSaleDate": "",
                        "lastSalePrice": ""
                    }
                ],
                "videos": [],
                "isHot": false,
                "streetView": {
                    "latLong": {
                        "latitude": 33.8633228,
                        "longitude": -84.1968123
                    },
                    "streetViewUrl": "https://shortened.url",
                    "displayLevel": 1,
                    "dataSourceId": 82,
                    "staticMapUrl": "https://shortened.url",
                    "streetViewAvailable": true
                },
                "altTextForImage": "4692 Pamler June Ct",
                "dataSourceId": 82,
                "assembledAddress": "4692 Pamler June Ct",
                "previousListingPhotosCount": 0,
                "displayType": 1
            }
        }
}

const searchResult = () => {
  return (
    <div>
      <h1> Example Response </h1>
      <Link href="/">
        <a>
          <p>Go Home</p>
        </a>
      </Link>
      <p>Address: {exampleResponse.data.addressSectionInfo.streetAddress.assembledAddress}</p>
      <p>{exampleResponse.data.addressSectionInfo.priceInfo.label}: {exampleResponse.data.addressSectionInfo.priceInfo.amount}</p>
      <p>Price: {exampleResponse.data.addressSectionInfo.priceInfo.amount}</p>
      <p>SqFt: {exampleResponse.data.addressSectionInfo.sqFt.value}</p>
      <p>Beds: {exampleResponse.data.addressSectionInfo.beds}</p>
      <p>Baths: {exampleResponse.data.addressSectionInfo.baths}</p>
      <p>Year Built: {exampleResponse.data.addressSectionInfo.yearBuilt}</p>
      <p>Lot Size: {exampleResponse.data.addressSectionInfo.lotSize}</p>
      <p>Predicted Value: {exampleResponse.data.addressSectionInfo.avmInfo.predictedValue}</p>
    </div>

  )
}

export default searchResult;
