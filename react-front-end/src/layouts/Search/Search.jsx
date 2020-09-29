import React from 'react';
import './Search.scss';
import AnimalTypeSelect from './AnimalTypeSelect';
import ClinicInput from './ClinicInput';
import CityInput from './CityInput';
import SearchButton from './SearchButton';

export default function Search() {
  return (
  <>
    <div id="search-container">
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" height="100%" width="100%"><path d="M-0.80,13.31 C157.97,-20.22 362.37,30.09 508.95,-0.48 L483.71,-123.84 L0.00,0.00 Z" stroke="none" fill="#fff"></path></svg>

    <form id='search-form' action="" method='GET'>
      <ClinicInput />
      <CityInput />
      <AnimalTypeSelect />
      <SearchButton />
    </form>
    </div>
  </>
  )
};
