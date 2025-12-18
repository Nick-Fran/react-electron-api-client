import React from "react";
import { Theme } from "@emotion/react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { HttpMethod, METHODS } from "../../types/http";

interface MethodSelectProps {
  value: HttpMethod;
  onChange: (method: HttpMethod) => void;
  sx?: SxProps<Theme>;
}

export function MethodSelect({ sx, value, onChange }: MethodSelectProps) {

  return (
    <FormControl sx={ sx }>
      <InputLabel id="method-label">Method</InputLabel>

      <Select
        labelId="method-label"
        value={value}
        label="Method"
        onChange={(e: SelectChangeEvent<HttpMethod>) => onChange(e.target.value as HttpMethod)}
      >
        {METHODS.map((m) => (
          <MenuItem key={m} value={m}>
            {m}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
