
export interface MenuRoute{
  title: string;
  path: string;
  icon?: string;
  subRoutes?: MenuRoute[];
}

export type TitlePosition = 'left' | 'right';

export type RoutesPosition = 'left' | 'right' | 'center';
