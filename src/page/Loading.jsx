import React from "react";

function Loading() {
  return (
    <svg width="500" height="500">
      <ellipse
        cx="250"   // 타원의 중심 x 좌표
        cy="250"   // 타원의 중심 y 좌표
        rx="50"   // 타원의 x축 반지름
        ry="100"   // 타원의 y축 반지름
        style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
      />
    <svg width="100" height="100">
      <ellipse
        cx="250"   // 타원의 중심 x 좌표
        cy="250"   // 타원의 중심 y 좌표
        rx="50"   // 타원의 x축 반지름
        ry="100"   // 타원의 y축 반지름
        style={{ fill: "black", stroke: "black", strokeWidth: 2 }}
      />
    </svg>
    </svg>
  );
}

export default Loading;
