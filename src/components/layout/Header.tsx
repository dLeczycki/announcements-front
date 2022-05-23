
import { SyntheticEvent, useContext, useState } from 'react';
import { SearchContext } from '../../contexts/search.context';

import { Button } from '../common/Button';
import './Header.css';

export const Header = () => {
  const {search, setSearch} = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setSearch(inputVal);
  }

  return (
    <header className="Header">
      <h1 className="Header__Heading">Announcements</h1>
      <Button text="Add announcement"/>
      <form className="Search" onSubmit={e => handleSubmit(e)}>
        <input className="Search__Input" type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
        <Button text="Search"/>
      </form>
    </header>
  )
}