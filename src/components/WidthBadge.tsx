import useMeasure from "../hooks/useMeasure";

export default function WidthBadge() {
  const [width, ref] = useMeasure();
  return (
    <>
      <div ref={ref} class="absolute inset-0" />
      <div className="absolute top-0 left-0 rounded-br-lg bg-white bg-opacity-75 p-2 text-xs font-bold">
        {width}px
      </div>
    </>
  );
}
