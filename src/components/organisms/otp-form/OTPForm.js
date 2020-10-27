import { ButtonTag, TypographyTag } from "../../atoms";
import { TextFieldTag } from "../../molecules/TextFieldTag";
import "./OTPForm.scss";

export const OTPForm = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="form">
    <TypographyTag className="form-title" variant="h4">
      Enter OTP
    </TypographyTag>
    <TextFieldTag
      name="otp"
      className="otp-field"
      value={value}
      onChange={onChange}
      label="OTP"
      variant="outlined"
      placeholder="123456"
    ></TextFieldTag>
    <ButtonTag type="submit">Verify</ButtonTag>
  </form>
);
