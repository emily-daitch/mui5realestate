import React, { useState, useEffect } from "react";

import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";
import InputAdornment from '@mui/material/InputAdornment';

export const FormInputCurrency = ({ name, control, setValue, placeholder }: FormInputProps) => {
	const [number, setNumber] = useState('');
	const [rawNumber, setRawNumber] = useState(0);

	useEffect(() => {
		if (rawNumber) setValue(name, rawNumber);
	}, [rawNumber]);

	const handleChange = (event: any) => {
		const { value } = event.target;

		// Remove any existing commas from the input
		const sanitizedValue = value.replace(/,/g, '');

		// Format the number with commas
		const formattedValue = Number(sanitizedValue).toLocaleString();

		setNumber(formattedValue);
		setRawNumber(sanitizedValue);
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({
				fieldState: { error },
			}) => (
				<TextField
					helperText={error ? error.message : null}
					size="small"
					error={!!error}
					onChange={handleChange}
					value={number}
					fullWidth
					variant="standard"
					placeholder={placeholder}
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					}}
				/>
			)}
		/>
	);
};