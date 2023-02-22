import type { ComponentChildren } from "preact";
import { useRef } from "preact/hooks";
import cn from "classnames";
import useMeasure from "../hooks/useMeasure";

interface Props {
  children: ComponentChildren;
  className?: Parameters<typeof cn>[number];
}

export default function Col({ children, className = false }: Props) {
  const ref = useRef(null);
  const width = useMeasure(ref);

  return (
    <div className={cn("flex", className)}>
      <div
        ref={ref}
        className="relative flex min-h-[100px] flex-grow items-center justify-center bg-blue-200"
      >
        <div className="absolute top-0 left-0 rounded-br-lg bg-white bg-opacity-75 p-2 text-xs font-bold">
          {width.offsetWidth}px
        </div>
        {children}
      </div>
    </div>
  );
}
