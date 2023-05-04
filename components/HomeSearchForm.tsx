import { Button, Typography, Paper, Box, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputSlider } from "./form-components/FormInputSlider";

const defaultValues = {
};

// EXAMPLE RESPONSE TO REMOVE
/*
{
    "@odata.context": "https://api.bridgedataoutput.com/api/v2/OData/actris_ref/$metadata#Property",
    "@odata.count": 1,
    "value": [
        {
            "@odata.context": "https://api.bridgedataoutput.com/api/v2/OData/actris_ref/$metadata#Property",
            "@odata.id": "https://api.bridgedataoutput.com/api/v2/OData/actris_ref/Property('4fa95bdcdd9bc990ebc0162e675da6e1')",
            "BathroomsFull": 1,
            "StreetDirPrefix": null,
            "WaterfrontYN": false,
            "LockBoxType": [
                "Electronic"
            ],
            "LotSizeAcres": 0.184,
            "SubdivisionName": "Southridge Sec 06",
            "OffMarketDate": null,
            "BedroomsTotal": 2,
            "Fencing": [
                "Fenced",
                "Privacy",
                "Wood"
            ],
            "InternetAddressDisplayYN": true,
            "LivingAreaUnits": null,
            "GreenSustainability": [
                "None"
            ],
            "Contingency": null,
            "ListAgentKey": "748fef7e2e1489db7f7c4af3a7330016",
            "TaxLegalDescription": "Lot 9 Blk A Southridge Sec 6",
            "CloseDate": null,
            "StreetSuffix": "DR",
            "HorseAmenities": [
                "None"
            ],
            "ListingService": "Full Service",
            "WaterSource": [
                "Public"
            ],
            "ContingentDate": null,
            "Topography": null,
            "Flooring": [
                "Carpet",
                "Tile",
                "Wood"
            ],
            "PhotosCount": 24,
            "LotSizeDimensions": null,
            "FireplacesTotal": 0,
            "StoriesTotal": null,
            "ModificationTimestamp": "2020-10-31T14:42:10.460Z",
            "AdditionalParcelsYN": false,
            "YearBuilt": 1981,
            "WaterfrontFeatures": [
                "None"
            ],
            "PropertyAttachedYN": null,
            "ViewYN": null,
            "BuyerAgentKey": null,
            "Cooling": [
                "Central Air"
            ],
            "GarageYN": false,
            "TaxLot": null,
            "ExteriorFeatures": [
                "None"
            ],
            "StatusChangeTimestamp": "2020-10-22T21:27:44.780Z",
            "AvailabilityDate": null,
            "OriginatingSystemID": "actris_ref",
            "SecurityFeatures": [
                "None"
            ],
            "BuyerAgentFullName": null,
            "HorseYN": false,
            "PetsAllowed": [],
            "DocumentsCount": null,
            "UnitNumber": "B",
            "PublicRemarks": "SELLER TO PAY CLOSING COSTS!  Ask the Agent for attractive preferred lender incentives!  Move into a beautiful condo at the center of 78704 with close proximity to Downtown and popular South Austin establishments.  This condo is minutes from Zilker Park, South Congress Ave, ABGB, St. Elmo, and Barton Creek Greenbelt.  2 beds + 1.5 baths, corner unit, private shaded fenced yard for entertainment, and ultra-low HOA of only $175/month which includes water, wastewater, trash, and common area maintenance.  Great investment opportunity to be in the middle of the action in a quiet neighborhood.  No restrictions for short term rental. Only condo in South Austin (78704) in this price range.",
            "NetOperatingIncome": null,
            "AssociationName": "1307 Southport HOA",
            "BuildingName": null,
            "OccupantType": "Vacant",
            "CoBuyerAgentKey": null,
            "OtherStructures": [
                "None"
            ],
            "AssociationFeeFrequency": "Monthly",
            "VirtualTourURLZillow": null,
            "ElementarySchoolDistrict": "Austin ISD",
            "CoListAgentFullName": null,
            "CoListAgentKey": null,
            "BelowGradeFinishedAreaUnits": null,
            "WaterBodyName": null,
            "EntryLocation": null,
            "CoListOfficeName": null,
            "SpaFeatures": [
                "None"
            ],
            "RoadSurfaceType": [],
            "AboveGradeFinishedArea": null,
            "LivingArea": 967,
            "PriceChangeTimestamp": null,
            "TaxAssessedValue": 1209000,
            "ListingKeyNumeric": 107581297,
            "MajorChangeType": "New Listing",
            "LeasableArea": null,
            "ListingContractDate": "2020-10-22",
            "CoListAgentKeyNumeric": null,
            "ExistingLeaseType": [],
            "CoListOfficeKey": null,
            "ParkingFeatures": [
                "Assigned"
            ],
            "PostalCodePlus4": null,
            "Zoning": null,
            "BathroomsHalf": 1,
            "PoolFeatures": [
                "None"
            ],
            "LotSizeArea": 0.184,
            "Sewer": [
                "Public Sewer"
            ],
            "Appliances": [
                "Dishwasher",
                "Disposal",
                "Cooktop Gas",
                "Microwave",
                "Stainless Steel Appliance(s)"
            ],
            "Heating": [
                "Central"
            ],
            "MLSAreaMajor": "6",
            "ListOfficeName": "Local Life Realty, LLC",
            "CoBuyerOfficeName": null,
            "BelowGradeFinishedArea": null,
            "TaxBlock": null,
            "TotalActualRent": null,
            "StreetName": "Southport",
            "OwnerPays": [],
            "AnchorsCoTenants": null,
            "CurrentUse": [],
            "PatioAndPorchFeatures": [
                "None"
            ],
            "OriginatingSystemKey": "actris_ref",
            "CountyOrParish": "Travis",
            "DualVariableCompensationYN": false,
            "MainLevelBedrooms": 0,
            "PropertyType": "Residential",
            "PhotosChangeTimestamp": "2020-11-08T16:06:56.456Z",
            "ListPrice": 200000,
            "OriginatingSystemName": "ABOR - actris ref",
            "ListingAgreement": "Exclusive Right To Sell",
            "Utilities": [
                "Electricity Available",
                "Natural Gas Available",
                "Phone Connected"
            ],
            "AssociationYN": true,
            "MlsStatus": "Active",
            "FireplaceFeatures": [
                "None"
            ],
            "StreetNumber": "1307",
            "GrossScheduledIncome": null,
            "ListingId": "1354967",
            "BelowGradeFinishedAreaSource": null,
            "CoBuyerOfficeKey": null,
            "DocumentsChangeTimestamp": null,
            "WindowFeatures": [
                "Window Treatments"
            ],
            "SpecialListingConditions": [
                "Standard"
            ],
            "NewConstructionYN": false,
            "CommunityFeatures": [
                "Cluster Mailbox"
            ],
            "BathroomsTotalInteger": 2,
            "LeaseTerm": null,
            "ListingKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
            "NumberOfBuildings": null,
            "GarageSpaces": 0,
            "GreenEnergyEfficient": [
                "None"
            ],
            "StateOrProvince": "TX",
            "Media": [
                {
                    "Order": "1",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m1",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/83dcefb7.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_1",
                    "ShortDescription": null
                },
                {
                    "Order": "2",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m2",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/1ad5be0d.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_2",
                    "ShortDescription": null
                },
                {
                    "Order": "3",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m3",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/6dd28e9b.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_3",
                    "ShortDescription": null
                },
                {
                    "Order": "4",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m4",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/f3b61b38.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_4",
                    "ShortDescription": null
                },
                {
                    "Order": "5",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m5",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/84b12bae.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_5",
                    "ShortDescription": null
                },
                {
                    "Order": "6",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m6",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/1db87a14.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_6",
                    "ShortDescription": null
                },
                {
                    "Order": "7",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m7",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/6abf4a82.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_7",
                    "ShortDescription": null
                },
                {
                    "Order": "8",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m8",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/fa005713.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_8",
                    "ShortDescription": null
                },
                {
                    "Order": "9",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m9",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/8d076785.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_9",
                    "ShortDescription": null
                },
                {
                    "Order": "10",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m10",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/a15d25e1.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_10",
                    "ShortDescription": null
                },
                {
                    "Order": "11",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m11",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/d65a1577.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_11",
                    "ShortDescription": null
                },
                {
                    "Order": "12",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m12",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/4f5344cd.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_12",
                    "ShortDescription": null
                },
                {
                    "Order": "13",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m13",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/3854745b.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_13",
                    "ShortDescription": null
                },
                {
                    "Order": "14",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m14",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/a630e1f8.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_14",
                    "ShortDescription": null
                },
                {
                    "Order": "15",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m15",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/d137d16e.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_15",
                    "ShortDescription": null
                },
                {
                    "Order": "16",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m16",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/483e80d4.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_16",
                    "ShortDescription": null
                },
                {
                    "Order": "17",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m17",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/3f39b042.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_17",
                    "ShortDescription": null
                },
                {
                    "Order": "18",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m18",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/af86add3.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_18",
                    "ShortDescription": null
                },
                {
                    "Order": "19",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m19",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/d8819d45.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_19",
                    "ShortDescription": null
                },
                {
                    "Order": "20",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m20",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/8a707622.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_20",
                    "ShortDescription": null
                },
                {
                    "Order": "21",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m21",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/fd7746b4.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_21",
                    "ShortDescription": null
                },
                {
                    "Order": "22",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m22",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/647e170e.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_22",
                    "ShortDescription": null
                },
                {
                    "Order": "23",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m23",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/13792798.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_23",
                    "ShortDescription": null
                },
                {
                    "Order": "24",
                    "MediaKey": "4fa95bdcdd9bc990ebc0162e675da6e1-m24",
                    "MediaURL": "https://dvvjkgh94f2v6.cloudfront.net/265d8f9/107581297/8d1db23b.jpeg",
                    "ResourceRecordKey": "4fa95bdcdd9bc990ebc0162e675da6e1",
                    "ResourceName": "Property",
                    "ClassName": "Residential",
                    "MediaCategory": "Photo",
                    "MimeType": "image/jpeg",
                    "MediaObjectID": "107581297_24",
                    "ShortDescription": null
                }
            ],
            "AboveGradeFinishedAreaUnits": null,
            "City": "Austin",
            "InternetEntireListingDisplayYN": true,
            "CoveredSpaces": 0,
            "ListAgentKeyNumeric": 33639900,
            "MiddleOrJuniorSchool": "Fulmore",
            "AssociationFeeIncludes": [
                "Common Area Maintenance",
                "Water"
            ],
            "SyndicateTo": [
                "AustinHomeSearch.com",
                "Homes.com",
                "Homesnap",
                "HAR.com LH",
                "Realtor.com",
                "Zillow/Trulia"
            ],
            "InternetAutomatedValuationDisplayYN": true,
            "VirtualTourURLUnbranded": null,
            "AccessibilityFeatures": [
                "None"
            ],
            "ElementarySchool": "Galindo",
            "StreetDirSuffix": null,
            "HighSchoolDistrict": "Austin ISD",
            "ListOfficeKeyNumeric": 20516617,
            "BuildingFeatures": [],
            "OwnershipType": "Common",
            "Disclosures": [
                "Seller Disclosure"
            ],
            "ListOfficeKey": "418573f489b0fbea7621598ef9b2230c",
            "DirectionFaces": "East",
            "Directions": "BEN WHITE/290-71 WEST TO S. 1ST EXIT - SERVICE ROAD WEST TO BANISTER LN/LIGHT INTERSECTION - RIGHT AROUND CURVE TO SOUTHRIDGE - LEFT TO 2ND SOUTHPORT",
            "BridgeModificationTimestamp": "2020-11-08T16:06:56.467Z",
            "LotFeatures": [
                "Curbs",
                "Interior Lot",
                "Level",
                "Trees-Medium (20 Ft - 40 Ft)",
                "Trees-Moderate"
            ],
            "ListAgentFullName": "Darshil Parikh",
            "PostalCode": "78704",
            "AttachedGarageYN": false,
            "Furnished": null,
            "StandardStatus": "Active",
            "DocumentsAvailable": [
                "Condo Docs Available"
            ],
            "CultivatedArea": null,
            "ConstructionMaterials": [
                "Brick Veneer",
                "Frame",
                "HardiPlank Type"
            ],
            "Roof": [
                "Composition"
            ],
            "PropertyCondition": [
                "Resale"
            ],
            "ParkingTotal": 2,
            "NumberOfUnitsTotal": null,
            "BuyerOfficeName": null,
            "AssociationFee": 175,
            "LotSizeSquareFeet": 8015.04,
            "CoListOfficeKeyNumeric": null,
            "ParcelNumber": "1307 B Southport",
            "CoBuyerAgentFullName": null,
            "PoolPrivateYN": false,
            "TenantPays": [],
            "AdditionalParcelsDescription": null,
            "MiddleOrJuniorSchoolDistrict": "Austin ISD",
            "BuyerOfficeKey": null,
            "ListingTerms": [
                "Cash",
                "Conventional",
                "FHA",
                "FMHA (Fannie Mae)",
                "VA Loan",
                "Zero Down"
            ],
            "FoundationDetails": [
                "Slab"
            ],
            "View": [
                "None"
            ],
            "OperatingExpense": null,
            "UnparsedAddress": "1307 Southport DR # B, Austin TX 78704",
            "PropertySubType": "Condominium",
            "InternetConsumerCommentYN": true,
            "BuildingAreaTotal": null,
            "HighSchool": "Travis",
            "Levels": [
                "Two"
            ],
            "OtherEquipment": [],
            "OperatingExpenseIncludes": [],
            "IDXParticipationYN": true,
            "InteriorFeatures": [
                "Breakfast Bar",
                "Interior Steps",
                "Recessed Lighting"
            ],
            "FeedTypes": []
        }
    ]
}
*/

interface IFormInput {
  cityZip: string;
  propertyType: string;
  beds: string;
  baths: string;
  minPrice: string;
  maxPrice: string;
};

const getPropertyData = async (data: IFormInput) => {
  const propertyType = data.propertyType === 'House' ? 'Residential' : 'Residential Lease';
  const beds = data.beds === '4+' ? '4' : data.beds;
  const baths = data.baths === '4+' ? '4' : data.baths;
  const url = 'https://api.bridgedataoutput.com/api/v2/OData/actris_ref/' +
    `Property?$filter=PropertyType eq \'${propertyType}\' ` +
    `and PostalCode eq \'${data.cityZip}\' and StandardStatus eq \'Active\' ` +
    `and BedroomsTotal ge ${beds} ` +
    `and BathroomsFull ge ${baths} ` +
    `and ListPrice ge ${data.minPrice} ` +
    `and ListPrice le ${data.maxPrice}`;
  const urlWithSpaces = url.replace(/%20/g, ' ');

  const response = await fetch(urlWithSpaces, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.BRIDGE_SECRET}`
      //For local development
      //'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BRIDGE_SECRET}`
    },
  });

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  } else {
    console.error(`Error fetching data: ${response.status} ${response.statusText}`);
    return null;
  }
};

export const HomeSearchForm = () => {
  const router = useRouter();

  const methods = useForm<IFormInput>({ defaultValues: defaultValues });

  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    console.log(data);

    console.log('getting property data');
    const pData = await getPropertyData(data);
    //e.preventDefault();
    const pDataSubsetArray = pData.value.map((home: any) => {
      const photos = home.Media.map((media: any) => {
        return media.MediaURL;
      })
      return {
        address: home.UnparsedAddress,
        lastSoldPrice: 0,
        askPrice: home.ListPrice,
        sqFt: home.LotSizeSquareFeet,
        beds: home.BedroomsTotal,
        baths: home.BathroomsFull + home.BathroomsHalf*.5,
        yearBuilt: home.YearBuilt,
        lotSize: home.LotSizeAcres,
        predictedValue: 0,
        media: photos
      }
    });
    console.log('pDataSubsetArray', pDataSubsetArray);

    localStorage.setItem('propertyData', JSON.stringify(pDataSubsetArray));
    router.push("searchResult/searchResult");
  };

  return (
    <Paper sx={{
      boxShadow: 'none'
    }}>
      {/* <Typography variant="h6"> Form Demo </Typography> */}
        {/* <FormProvider> */}
            <Box sx={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                border: "none"
            }}>
              <Grid container sx={{justifyContent: 'center'}}>
                <Grid item key={'propertyType'} xs={12} md={6} lg={2}>
                  <FormInputDropdown name="propertyType" control={control} label="Property Type" options={[
                    {
                      label: "House",
                      value: "House"
                    },
                    {
                      label: "Apartment",
                      value: "Apartment"
                    }
                  ]}/>
                </Grid>
                <Grid item key={'cityZip'} xs={12} md={6} lg={2}>
                  <FormInputText name="cityZip" control={control} placeholder="City / Zip" />
                </Grid>
                <Grid item key={'beds'} xs={12} md={6} lg={2}>
                  <FormInputDropdown name="beds"control={control} label="Beds" options={[
                    {
                      label: "1",
                      value: "1"
                    },
                    {
                      label: "2",
                      value: "2"
                    },
                    {
                      label: "3",
                      value: "3"
                    },
                    {
                      label: "4+",
                      value: "4+"
                    }
                  ]}/>
                </Grid>
                <Grid item key={'baths'} xs={12} md={6} lg={2}>
                  <FormInputDropdown name="baths" control={control} label="Baths" options={[
                    {
                      label: "1",
                      value: "1"
                    },
                    {
                      label: "2",
                      value: "2"
                    },
                    {
                      label: "3",
                      value: "3"
                    },
                    {
                      label: "4+",
                      value: "4+"
                    }
                  ]}/>
                </Grid>
                <Grid item key={'minPrice'} xs={12} md={6} lg={2}>
                  <FormInputText name="minPrice" control={control} placeholder="Min. Price" />
                </Grid>
                <Grid item key={'maxPrice'} xs={12} md={6} lg={2}>
                  <FormInputText name="maxPrice" control={control} placeholder="Max. Price" />
                </Grid>
              </Grid>
            </Box>
            <br/>
            <Box sx={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}>
              <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                Submit
              </Button>
              <Button onClick={() => reset()} variant={"outlined"}>
                Reset
              </Button>
            </Box>
        {/* </FormProvider> */}
    </Paper>
  );
};