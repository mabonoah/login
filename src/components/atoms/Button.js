import Button from "@material-ui/core/Button";

export const ButtonTag = ({
  variant = "contained",
  size = "medium",
  color = "primary",
  onClick,
  ...props
}) => (
  <Button
    variant={variant}
    size={size}
    color={color}
    onClick={onClick}
    {...props}
  >
    {props.children}
  </Button>
);
