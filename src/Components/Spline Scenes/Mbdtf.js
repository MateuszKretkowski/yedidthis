import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Mbdtf() {
  const album = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Album");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    album.current = obj;
  }

  function moveObj() {
    console.log(album.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    // move the object in 3D space
    album.current.position.x += 10;
  }

  return (
    <>
      <Spline
        scene="https://prod.spline.design/9kVjnZNNbhaVm7tK/scene.splinecode"
        onLoad={onLoad}
      />
      <button type="button" onClick={moveObj}>
        Move Cube
      </button>
    </>
  );
}
