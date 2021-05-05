import { useState } from "react";
import "./index.css";
import Wrapper from "../wrapper";
import DetailList from "../detailList";
export default function Pipeline({ desc, listDesc = [] }) {
  return (
    <div
      className="pipeline"
    >
      <p>{desc}</p>
      <Wrapper
        top="200%"
        width="20rem"
        xCenter
        children={<DetailList desc={listDesc} />}
      />
    </div>
  );
}
