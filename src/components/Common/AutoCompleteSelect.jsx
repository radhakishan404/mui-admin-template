import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";

const AutoCompleteSelect = ({ id, options, label, isMultiple = false, onChange, error, helperText, value = [], name }) => {

  const [filter, setFilter] = React.useState("");

  return (
    <Autocomplete
      id={id}
      fullWidth
      multiple
      options={options}
      getOptionLabel={(option) => option.title}
      onChange={onChange}
      isMultiple={isMultiple}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          fullWidth
          error={error}
          helperText={helperText}
          inputProps={{
            ...params.inputProps,
          }}
          size={"small"}
        />
      )}
      onInputChange={(event, newInputValue) => setFilter(newInputValue)}
      inputValue={filter}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      filterSelectedOptions
      value={value}
    />
  );
}

export default AutoCompleteSelect;


