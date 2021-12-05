import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Menú',
    isTitle: true
  },
  {
    label: 'Escritorio',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Noticias',
    icon: 'home',
    link: '/noticias'
  },
  {
    label: 'Aplicaciones',
    isTitle: true
  },
  {
    label: 'Workplace',
    icon: 'message-square',
    link: '/apps/chat',
  },
  {
    label: 'Potentor',
    icon: 'message-square',
    link: '/apps/chat',
  },
  {
    label: 'P2',
    icon: 'message-square',
    link: '/apps/chat',
  },
  {
    label: 'Appleton',
    icon: 'book-open',
    link: '/apps/chat',
  }

];
