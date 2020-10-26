import { ButtonTag, TypographyTag } from '../../atoms';
import { TextFieldTag } from '../../molecules/TextFieldTag';
import './login.scss';

export const Login = ({ EmailValue, passwordValue, onChangeEmail, onChangePassword, onSubmit }) => (
    <form onSubmit={onSubmit} className="login-form">
        <TypographyTag className="title" variant="h4">Login</TypographyTag>
        <TextFieldTag className="login-field" value={EmailValue} onChange={onChangeEmail}
            label="Email" variant="outlined" placeholder="m.ali@gmail.com">
        </TextFieldTag>
        <TextFieldTag className="login-field" value={passwordValue} onChange={onChangePassword}
            label="Password" variant="outlined" placeholder="12345">
        </TextFieldTag>
        <ButtonTag type="submit">Log in</ButtonTag>
    </form>
);
