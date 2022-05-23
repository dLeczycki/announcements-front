
import { Link } from 'react-router-dom';
import './Button.css';

interface Props {
  to?: string;
  text: string;
}

export const Button = (props: Props) => (
  props.to
    ? <Link className="Button Button--Link" to={props.to}>{props.text}</Link>
    : <button className="Button">{props.text}</button>
)