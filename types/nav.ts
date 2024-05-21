export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
}

export interface MainNavProps {
  items?: NavItem[];
}
