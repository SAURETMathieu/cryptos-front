import { IconProps } from "@radix-ui/react-icons/dist/types";

export interface ColumnConfig {
  id: string;
  title: string;
  options: Array<{
    value: string;
    label: string;
    icon?: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
  }>;
}
