import { Button } from './Button';
import './Button.css';

interface Props {
  text: string;
}

export const FormButton = (props: Props) => (
    <Button className={`Button--FormButton`} text={props.text} />
)