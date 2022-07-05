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
    label: 'Página Web Jaguar',
    icon: 'book-open',
    link: 'https://www.jaguar-ep.com/',
  },
  {
    label: 'P2 Ideas',
    icon: 'clipboard',
    link: 'https://soffid.jaguar-ep.com/soffid/main/menu.zul?option=appmenu_P2Ideas',
  },
  {
    label: 'P2 Workflow',
    icon: 'book',
    link: 'https://soffid.jaguar-ep.com/soffid/main/menu.zul?option=appmenu_P2Workflow',
  },
  {
    label: 'P2 iApprove',
    icon: 'book-open',
    link: 'https://soffid.jaguar-ep.com/soffid/main/menu.zul?option=appmenu_P2Approve',
  },
  {
    label: 'Buzón de Transparencia',
    icon: 'book-open',
    link: 'https://buzon.jaguar-ep.com/',
  },
  // {
  //   label: 'Tickets TI & Soporte P2Ideas',
  //   icon: 'book-open',
  //   link: 'https://idp.jaguar-ep.com/profile/SAML2/Unsolicited/SSO?providerId=https://jaguarep.myfreshworks.com/sp/SAML/457531765233658207/metadata',
  // },
  {
    label: 'Reservación Espacios CDMX',
    icon: 'book-open',
    link: 'https://sedein.com/jaguar/Web/',
  }
];
