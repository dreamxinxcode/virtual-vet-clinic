import React from 'react';
import { Link } from "react-router-dom";


export default function Navigation() {
  return (
    <nav>
      <ul>
        <Link to='/content'><li>Content</li></Link>,
      </ul>
    </nav>
  )
}