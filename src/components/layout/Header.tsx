
import { Button } from '../common/Button';
import './Header.css';

export const Header = () => (
  <header className="Header">
    <h1 className="Header__Heading">Announcements</h1>
    <Button text="Add announcement"/>
    <div className="Search">
      <input className="Search__Input" type="text" />
      <Button text="Search"/>
    </div>
  </header>
  )