import Button from '@material-ui/core/Button';

export const ButtonTag = ({ ...props }) => (
    <Button variant="contained" size="medium" color="primary" {...props}>
        {props.children}
    </Button>
);