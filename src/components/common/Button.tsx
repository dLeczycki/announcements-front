
import { Link } from 'react-router-dom';
import './Button.css';

interface Props {
  to?: string;
  className? :string;
  text: string;
}

export const Button = (props: Props) => (
  props.to
    ? <Link className={`Button Button--Link ${props.className}`} to={props.to}>{props.text}</Link>
    : <button className={`Button ${props.className}`}>{props.text}</button>
)