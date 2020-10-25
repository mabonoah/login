import Typography from '@material-ui/core/Typography';

export const TypographyTag = ({ ...props }) => (
    <Typography variant="h2" gutterBottom {...props}>
        {props.children}
    </Typography>
);