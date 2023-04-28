import { Button, Typography, Paper, Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import {useRouter} from 'next/router'
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputSlider } from "./form-components/FormInputSlider";

const defaultValues = {
  propertyType: "House",
  cityZip: "",
  beds: "2",
  baths: "2",
  minPrice: "100000",
  maxPrice: "200000",
};

interface IFormInput {

};

export const HomeSearchForm = () => {
  const router = useRouter()

  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    //e.preventDefault();
    router.push("searchResult/searchResult");
  };

  return (
    <Paper sx={{
      boxShadow: 'none'
    }}>
      <Typography variant="h6"> Form Demo </Typography>
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
                <FormInputDropdown name="propertyType"control={control} label="Property Type" options={[
                  {
                    label: "House",
                    value: "House"
                  },
                  {
                    label: "Apartment",
                    value: "Apartment"
                  }
                ]}/>
                <FormInputText name="cityZip" control={control} label="City / Zip" />
                <FormInputDropdown name="beds"control={control} label="Beds" options={[
                  {
                    label: "0",
                    value: "0"
                  },
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
                <FormInputText name="baths" control={control} label="Baths" />
                <FormInputText name="minPrice" control={control} label="Min. Price" />
                <FormInputText name="maxPrice" control={control} label="Max. Price" />
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