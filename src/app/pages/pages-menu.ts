import { NbMenuItem } from '@nebular/theme';
import { DashboardService } from '../@core/services/dashboard.service';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
];
