import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputDropdown: React.FC<FormInputProps> = ({
	name,
	control,
	label,
	options
}) => {
	const generateSingleOptions = (options: any) => {
		return options.map((option: any) => {
			return (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			);
		});
	};

	return (
		<FormControl size={"small"} fullWidth variant="standard">
			<InputLabel>{label}</InputLabel>
			<Controller
				render={({ field: { onChange, value } }) => (
					<Select onChange={onChange} value={value} fullWidth>
						{generateSingleOptions(options)}
					</Select>
				)}
				control={control}
				name={name}
			/>
		</FormControl>
	);
};