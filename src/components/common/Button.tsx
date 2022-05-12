
import './Button.css';

interface Props {
  text: string;
}

export const Button = (props: Props) => (
  <button className="Button">{props.text}</button>
)