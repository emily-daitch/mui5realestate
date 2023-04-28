import { Button, Typography, Paper, Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputSlider } from "./form-components/FormInputSlider";

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

interface IFormInput {

};

export const HomeSearchForm = () => {
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

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
                <FormInputDropdown name="dropdownValue"control={control} label="Property Type"/>
                <FormInputText name="textValue" control={control} label="City / Zip" />
                <FormInputDropdown name="dropdownValue"control={control} label="Beds"/>
                <FormInputDropdown name="dropdownValue"control={control} label="Baths"/>
                <FormInputText name="textValue" control={control} label="Min. Price" />
                <FormInputText name="textValue" control={control} label="Max. Price" />
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