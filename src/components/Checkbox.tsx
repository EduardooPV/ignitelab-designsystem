import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight="bold"
          className="h-6 w-6 text-cyan-500 flex items-center justify-center"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
