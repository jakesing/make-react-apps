import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MyNavLink(props) {
  return (
    <NavLink exact to={props.route} activeClassName="is-active">
      {props.name}
    </NavLink>
  );
}
