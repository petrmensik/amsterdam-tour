import { IMenuItem } from '@amst/core';

export const MENU_ITEM_LIST: IMenuItem[] = [
  {
    key: 'home',
    icon: ['fas', 'bicycle'],
    route: ['/'],
  },
  {
    key: 'venue',
    icon: ['far', 'list-alt'],
    route: ['/', 'venues', 'list'],
  },
  {
    key: 'map',
    icon: ['far', 'map'],
    route: ['/', 'venues', 'map'],
  },
  {
    key: 'git',
    icon: ['fab', 'github'],
    link: 'https://github.com/petrmensik/amsterdam-tour',
  },
];
