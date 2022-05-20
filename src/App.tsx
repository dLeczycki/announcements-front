import { useState } from 'react';

import {SearchContext} from './contexts/search.context';
import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';

export const App = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchContext.Provider value={{search, setSearch}}>
        <Header />
        <Map />
      </SearchContext.Provider>
    </>
  );
}

