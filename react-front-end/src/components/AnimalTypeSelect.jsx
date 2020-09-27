import React from 'react'

export default function AnimalTypeSelect () {
  return (
  <div class="ui fluid selection dropdown">
    <input type="hidden" name="user"/>
    <i class="dropdown icon"></i>
    <div class="default text">Select Animal Type</div>
    <div class="menu">
      <div class="item" data-value="jenny">
        <img class="ui mini avatar image" src="/images/avatar/small/jenny.jpg"/>
        Jenny Hess
      </div>
    </div>
  </div>
  )
}