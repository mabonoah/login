import { LoginForm } from "../organisms";

export const LoginTemplate = ({
  EmailValue,
  passwordValue,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) => (
  <LoginForm
    EmailValue={EmailValue}
    passwordValue={passwordValue}
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onSubmit={onSubmit}
  ></LoginForm>
);
