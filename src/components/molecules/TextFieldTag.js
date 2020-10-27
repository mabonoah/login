import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";

export const TextFieldTag = ({ label, value, onChange, ...props }) => {
  const matches = useMediaQuery("(min-width:767.98px)");

  return (
    <TextField
      size={matches ? "medium" : "small"}
      label={label}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
