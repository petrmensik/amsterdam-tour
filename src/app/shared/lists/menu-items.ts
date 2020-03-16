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
    route: ['/', 'venue'],
  },
  {
    key: 'event',
    icon: ['far', 'calendar-alt'],
    route: ['/', 'event'],
  },
  {
    key: 'map',
    icon: ['far', 'map'],
    route: ['/', 'map'],
  },
  {
    key: 'git',
    icon: ['fab', 'github'],
    route: ['/', 'git'],
  },
];
