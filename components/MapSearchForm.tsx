import { Button, Paper, Box, Grid } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import { FormInputCurrency } from "./form-components/FormInputCurrency";
import { FormInputDropdown } from "./form-components/FormInputDropdown";

const defaultValues = {
};

interface IFormInput {
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
    `and PostalCode eq \'78704\' and StandardStatus eq \'Active\' ` +
    `and BedroomsTotal ge ${beds} ` +
    `and BathroomsFull ge ${baths} ` +
    `and ListPrice ge ${data.minPrice} ` +
    `and ListPrice le ${data.maxPrice}`;
	const urlWithSpaces = url.replace(/%20/g, ' ');

	const response = await fetch(urlWithSpaces, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			//'Authorization': `Bearer ${process.env.BRIDGE_SECRET}`
			//For local development
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BRIDGE_SECRET}`
		},
	});

	if (response.ok) {
		const jsonResponse = await response.json();
		return jsonResponse;
	} else {
		console.error(`Error fetching data: ${response.status} ${response.statusText}`);
		return null;
	}
};

export const MapSearchForm = () => {
	const router = useRouter();

	const methods = useForm<IFormInput>({ defaultValues: defaultValues });

	const { handleSubmit, reset, control, setValue } = methods;
	const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {

		const polygons = localStorage.getItem('polygons');

		const pData = await getPropertyData(data);
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

		localStorage.setItem('propertyData', JSON.stringify(pDataSubsetArray));
		router.push("searchResult/searchResult");
	};

	return (
		<Paper sx={{
			boxShadow: 'none'
		}}>
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
					<Grid item key={'propertyType'} xs={12} md={8} lg={3} padding={'8px'}>
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
					<Grid item key={'beds'} xs={12} md={8} lg={3} padding={'8px'}>
						<FormInputDropdown name="beds"control={control} label="Beds" options={[
							{
								label: "1+",
								value: "1"
							},
							{
								label: "2+",
								value: "2"
							},
							{
								label: "3+",
								value: "3"
							},
							{
								label: "4+",
								value: "4"
							}
						]}/>
					</Grid>
					<Grid item key={'baths'} xs={12} md={8} lg={3} padding={'8px'}>
						<FormInputDropdown name="baths" control={control} label="Baths" options={[
							{
								label: "1+",
								value: "1"
							},
							{
								label: "2+",
								value: "2"
							},
							{
								label: "3+",
								value: "3"
							},
							{
								label: "4+",
								value: "4"
							}
						]}/>
					</Grid>
					<Grid item key={'minPrice'} xs={12} md={8} lg={4} padding={'8px'}>
						<FormInputCurrency name="minPrice" setValue={setValue} control={control} placeholder="Min. Price ($USD)" />
					</Grid>
					<Grid item key={'maxPrice'} xs={12} md={8} lg={4} padding={'8px'}>
						<FormInputCurrency name="maxPrice" setValue={setValue} control={control} placeholder="Max. Price ($USD)" />
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
				alignItems: "center",
			}}>
				<Button onClick={handleSubmit(onSubmit)} color={'secondary'} variant={"outlined"} sx={{borderRadius: '0px', marginRight: '5px'}}>
                Search
				</Button>
				<Button onClick={() => reset()} color={'secondary'} variant={"outlined"} sx={{borderRadius: '0px'}}>
                Reset
				</Button>
			</Box>
		</Paper>
	);
};