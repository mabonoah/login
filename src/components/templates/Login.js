import { Login } from "../organisms";

export const LoginTemplate = ({
  EmailValue,
  passwordValue,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => (
  <Login
    EmailValue={EmailValue}
    passwordValue={passwordValue}
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onSubmit={onSubmit}
  ></Login>
);
