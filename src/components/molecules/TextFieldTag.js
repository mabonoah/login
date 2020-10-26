import TextField from '@material-ui/core/TextField';

export const TextFieldTag = ({ label, value, onChange, ...props }) => (
    <TextField label={label} value={value} onChange={onChange} {...props} />
);