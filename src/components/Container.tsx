import { useRef } from "preact/hooks";
import useMeasure from "../hooks/useMeasure";
import Col from "./Col";

export default function Container() {
  const ref = useRef<HTMLDivElement>(null);
  const width = useMeasure(ref);

  return (
    <div ref={ref} className="container my-16 bg-gray-300 px-2">
      <h1 className="mb-4 pt-6 text-center text-2xl">
        <span className="font-semibold">Container with 0.5rem padding:</span>{" "}
        {width.clientWidth}px
      </h1>
      <h2 className="mb-2 text-xl font-semibold">Row with 1rem gutters</h2>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="col">
          <span className="font-semibold">Full Width</span>
        </Col>
      </div>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="w-1/2">
          <span className="font-semibold">1/2</span>
        </Col>
        <Col className="w-1/2">
          <span className="font-semibold">1/2</span>
        </Col>
      </div>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="w-1/3">
          <span className="font-semibold">1/3</span>
        </Col>
        <Col className="w-1/3">
          <span className="font-semibold">1/3</span>
        </Col>
        <Col className="w-1/3">
          <span className="font-semibold">1/3</span>
        </Col>
      </div>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="w-2/3">
          <span className="font-semibold">2/3</span>
        </Col>
        <Col className="w-1/3">
          <span className="font-semibold">1/3</span>
        </Col>
      </div>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="w-1/4">
          <span className="font-semibold">1/4</span>
        </Col>
        <Col className="w-1/4">
          <span className="font-semibold">1/4</span>
        </Col>
        <Col className="w-1/4">
          <span className="font-semibold">1/4</span>
        </Col>
        <Col className="w-1/4">
          <span className="font-semibold">1/4</span>
        </Col>
      </div>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="w-3/4">
          <span className="font-semibold">3/4</span>
        </Col>
        <Col className="w-1/4">
          <span className="font-semibold">1/4</span>
        </Col>
      </div>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="w-3/5">
          <span className="font-semibold">3/5</span>
        </Col>
        <Col className="w-2/5">
          <span className="font-semibold">2/5</span>
        </Col>
      </div>
      <h2 className="mb-2 text-xl font-semibold">
        Col width changes with breakpoint
      </h2>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="md:w-3/4 lg:w-3/5 xl:w-1/2">
          <span className="font-semibold">
            <span className="md:hidden">full</span>
            <span className="hidden md:inline-block lg:hidden">
              <span className="text-orange-600">[md]</span> 3/4
            </span>
            <span className="hidden lg:inline-block xl:hidden">
              <span className="text-orange-600">[lg]</span> 3/5
            </span>
            <span className="hidden xl:inline-block">
              <span className="text-orange-600">[xl]</span> 1/2
            </span>
          </span>
        </Col>
        <Col className="md:w-1/4 lg:w-2/5 xl:w-1/2">
          <span className="font-semibold">
            <span className="md:hidden">full</span>
            <span className="hidden md:inline-block lg:hidden">
              <span className="text-orange-600">[md]</span> 1/4
            </span>
            <span className="hidden lg:inline-block xl:hidden">
              <span className="text-orange-600">[lg]</span> 2/5
            </span>
            <span className="hidden xl:inline-block">
              <span className="text-orange-600">[xl]</span> 1/2
            </span>
          </span>
        </Col>
      </div>
      <h2 className="mb-2 text-xl font-semibold">Static width column</h2>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="w-[300px] text-center leading-none">
          <span className="font-semibold">
            300px
            <br />
          </span>
          <span className="text-xs">(w/ gutter)</span>
        </Col>
        <Col className="col">
          <span className="font-semibold">Auto-fill</span>
        </Col>
      </div>
      <h2 className="mb-2 text-xl font-semibold">Subgrid</h2>
      <div className="row mb-2 bg-gray-400 py-2">
        <Col className="lg:w-1/2">
          <div className="row flex-grow bg-gray-500 py-2 my-8">
            <Col className="mb-2 md:mb-0 md:w-1/2">
              <span className="font-semibold ">
                <span className="md:hidden">Full Width</span>
                <span className="hidden md:inline-block">
                  <span className="text-orange-600">[md]</span> 1/2
                </span>
              </span>
            </Col>
            <Col className="md:w-1/2">
              <span className="font-semibold ">
                <span className="md:hidden">Full Width</span>
                <span className="hidden md:inline-block">
                  <span className="text-orange-600">[md]</span> 1/2
                </span>
              </span>
            </Col>
          </div>
        </Col>
        <Col className="lg:w-1/2">
          <span className="font-semibold ">
            <span className="lg:hidden">Full Width</span>
            <span className="hidden lg:inline-block">
              <span className="text-orange-600">[lg]</span> 1/2
            </span>
          </span>
        </Col>
      </div>
    </div>
  );
}
