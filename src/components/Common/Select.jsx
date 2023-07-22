import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export default function BasicSelect(props) {
  const {
    id,
    label,
    value,
    name,
    onChange,
    input,
    key,
    items,
    labelId,
    size = "small",
    ...other
  } = props;

  return (
    <FormControl fullWidth error={other.error}>
      <InputLabel size={size}>{label}</InputLabel>
      <Select
        size={size}
        labelId={labelId}
        id={id}
        name={name}
        value={value ? value : ""}
        label={label}
        onChange={onChange}
        {...other}
      >
        {items?.map((element, index) => {
          return (
            <MenuItem disabled={element.disabled} key={"select_key_" + label + index} value={element.value}>
              {element.label}
            </MenuItem>
          );
        })}
      </Select>
      {other.error ? (
        <FormHelperText>{other.helperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
}
