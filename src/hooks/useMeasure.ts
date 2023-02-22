import { Ref, useEffect, useState } from "preact/hooks";

export default function useMeasure(ref: Ref<HTMLElement>) {
  const [offsetWidth, setOffsetWidth] = useState<number>();
  const [clientWidth, setClientWidth] = useState<number>();

  const resizeHandler = () => {
    if (ref.current !== null) {
      setOffsetWidth(ref.current?.offsetWidth);
      setClientWidth(ref.current?.clientWidth);
    }
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [ref]);

  return { offsetWidth, clientWidth };
}
