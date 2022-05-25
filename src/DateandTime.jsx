import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";


export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          renderInput={(props) => <TextField {...props} />}
          label="Date & Time"
          value={value}
        />
        <TimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
  );
}
