import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipProvider = ({ children }) => {
  return <Tooltip.Provider>{children}</Tooltip.Provider>;
};