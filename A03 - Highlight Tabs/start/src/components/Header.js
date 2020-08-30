import React from 'react';
import Tab from './Tab';
import MyNavLink from './MyNavLink';

const tabData = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Features',
    route: '/features',
  },
];

export default function Header() {
  return (
    <div className="tabs">
      {tabData.map((tab, i) => {
        return (
          <Tab>
            <MyNavLink
              route={tabData[i].route}
              name={tabData[i].name}
              key={i}
            />
          </Tab>
        );
      })}
    </div>
  );
}
