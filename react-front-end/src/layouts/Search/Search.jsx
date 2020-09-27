import React from 'react';
import './Search.scss';
import AnimalTypeSelect from '../../components/AnimalTypeSelect';
import CityInput from '../../components/CityInput';


export default function Search() {
  return (
  <>
    <div id="search-container">

    <form action="" method='GET'>
      <CityInput />
      <AnimalTypeSelect />
      <button class="ui violet button">
        <i class="icon search"></i>
        Search
      </button>
    </form>
    </div>
  </>
  )
};
