import React from 'react';
import './Search.scss';
import AnimalTypeSelect from '../../components/AnimalTypeSelect';
import CityInput from '../../components/CityInput';
import SearchButton from './SearchButton';

export default function Search() {
  return (
  <>
    <div id="search-container">

    <form id='search-form' action="" method='GET'>
      <CityInput />
      <AnimalTypeSelect />
      <SearchButton />
    </form>
    </div>
  </>
  )
};
