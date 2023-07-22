import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      <Typography variant="body" sx={{ lineHeight: 2 }}>{label}</Typography>
      <ExpandMoreIcon />
    </Button>
  );
}

function ButtonDatePicker(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      area-selected="true"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}


const ButtonDatePickerComponent = ({
  label = "Select date",
  date,
  setDate,
  minDate,
  onError,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ButtonDatePicker
        label={label}
        value={date}
        onChange={setDate}
        minDate={minDate}
        size="small"
        onError={(err) => {
          onError(err);
        }}
      />
    </LocalizationProvider>
  );
};

export default ButtonDatePickerComponent;
