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
    icon: 'message-circle',
    link: '/noticias'
  },
  {
    label: 'Aplicaciones',
    isTitle: true
  },
  {
    label: 'Workplace',
    icon: 'facebook',
    link: '/',
  },
  {
    label: 'Potentor',
    icon: 'clipboard',
    link: '/',
  },
  {
    label: 'P2',
    icon: 'book',
    link: '/',
  },
  {
    label: 'Appleton',
    icon: 'book-open',
    link: '/',
  }

];
