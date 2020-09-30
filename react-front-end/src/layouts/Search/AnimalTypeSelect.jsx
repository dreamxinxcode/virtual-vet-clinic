import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Bird',
    text: 'Bird',
    value: 'Bird',
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Cat',
    text: 'Cat',
    value: 'Cat',
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Dog',
    text: 'Dog',
    value: 'Dog',
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Fish',
    text: 'Fish',
    value: 'Fish',
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },  
  {
    key: 'Reptile',
    text: 'Reptile',
    value: 'Reptile',
    // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },  
]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Select Animal Type'
    fluid
    selection
    options={friendOptions}
  />
)

export default DropdownExampleSelection