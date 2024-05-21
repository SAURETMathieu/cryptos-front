import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import NavigationLink from "@/src/components/utils/NavigationLink";

import { MainNavProps } from "@/types/nav";

export default function AsideTooltip({ items }: MainNavProps) {
  return (
    <>
      {items?.map(
        (item, index) =>
          item.href && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <NavigationLink
                    key={index}
                    href={item.href}
                    className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8"
                  >
                    {item.icon}
                    <span className="sr-only">{item.title}</span>
                  </NavigationLink>
                </TooltipTrigger>
                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
      )}
    </>
  );
}
