import { ButtonTag, TypographyTag } from '../../atoms';
import { TextFieldTag } from '../../molecules/TextFieldTag';
import './OTP.scss';

export const OTP = ({ value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit} className="otp-form">
        <TypographyTag className="title" variant="h4">Enter OTP</TypographyTag>
        <TextFieldTag className="otp-field" value={value} onChange={onChange}
            label="OTP" variant="outlined" placeholder="123456">
        </TextFieldTag>
        <ButtonTag type="submit">Verify</ButtonTag>
    </form>
);
