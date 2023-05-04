import { Button, Typography, Paper, Box, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputSlider } from "./form-components/FormInputSlider";

const defaultValues = {
};

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
    `and BathroomsTotalDecimal ge ${baths} ` +
    `and ListPrice ge ${data.minPrice} ` +
    `and ListPrice le ${data.maxPrice}`;
  const urlWithSpaces = url.replace(/%20/g, ' ');


  const response = await fetch(urlWithSpaces, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.BRIDGE_SECRET}`
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

    const pData = await getPropertyData(data);
    console.log('pData', pData);
    //e.preventDefault();
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