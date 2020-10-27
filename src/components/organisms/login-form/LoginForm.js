import { ButtonTag, TypographyTag } from "../../atoms";
import { TextFieldTag } from "../../molecules/TextFieldTag";
import "./LoginForm.scss";

export const LoginForm = ({
  EmailValue,
  passwordValue,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="form">
    <TypographyTag className="form-title" variant="h4">
      Login
    </TypographyTag>
    <TextFieldTag
      className="login-field"
      name="email"
      type="text"
      value={EmailValue}
      onChange={onChangeEmail}
      label="Email"
      variant="outlined"
      placeholder="m.ali@gmail.com"
    ></TextFieldTag>
    <TextFieldTag
      className="login-field"
      name="password"
      type="password"
      value={passwordValue}
      onChange={onChangePassword}
      label="Password"
      variant="outlined"
      placeholder="12345"
    ></TextFieldTag>
    <ButtonTag type="submit">Log in</ButtonTag>
  </form>
);
