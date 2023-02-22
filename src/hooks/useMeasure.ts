import { useCallback, useState } from "preact/hooks";

export default function useMeasure(): [
  number | undefined,
  (node: Element | null) => void
] {
  const [offsetWidth, setOffsetWidth] = useState<number>();

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { target } = entry;
      if (target instanceof HTMLElement) {
        setOffsetWidth(target.offsetWidth);
      }
    }
  });

  const ref = useCallback((node: Element | null) => {
    if (node !== null) {
      resizeObserver.observe(node);
    }
  }, []);

  return [offsetWidth, ref];
}
