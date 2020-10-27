import * as React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import { TypographyTag } from "../atoms";

export const TextFieldTag = ({ label, value, onChange, error, ...props }) => {
  const matches = useMediaQuery("(min-width:767.98px)");

  return (
    <React.Fragment>
      <TextField
        size={matches ? "medium" : "small"}
        label={label}
        value={value}
        onChange={onChange}
        {...props}
      />
      <TypographyTag color="secondary" variant="body1">
        {error}
      </TypographyTag>
    </React.Fragment>
  );
};
