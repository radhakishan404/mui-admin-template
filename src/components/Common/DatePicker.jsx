import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormHelperText } from "@mui/material";

const DatePickerComponent = ({
  label = "Select date",
  value,
  name,
  helperText,
  error,
  fullWidth,
  disabled,
  onChange,
  minDate,
  id
}) => {
  return (
    
    <FormControl fullWidth error={error}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={label}
          value={value}
          onChange={onChange}
          minDate={minDate}
          size="small"
          disabled={disabled}
          slotProps={{ textField: { size: 'small' } }}
          renderInput={(params) => {
            return <TextField
              size="small"
              id={id}
              name={name}
              {...params}
              fullWidth={fullWidth}
              disabled={disabled}
            />;
          }}
        />
        {error ? (
          <FormHelperText>{helperText}</FormHelperText>
        ) : null}
      </LocalizationProvider>
    </FormControl>
  );
};

export default DatePickerComponent;
