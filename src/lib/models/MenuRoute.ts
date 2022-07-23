
export interface MenuRoute{
  title: string;
  path: string;
  icon?: string;
  subRoutes?: MenuRoute[];
}

export type TitlePosition = 'left' | 'right';

export type RoutesPosition = 'left' | 'right' | 'center';

export type NavColors = 'charcoal' | 'blue' | 'red' | 'lime' | 'dark' | 'light' | 'lavender' | 'skyblue' | 'lightpurple' | 'darkgreen' | 'lightgreen';
