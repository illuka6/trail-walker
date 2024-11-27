import React from "react";

function Difficulty({ trail }) {
  function renderStars(difficulty) {
    const totalStars = 5; // 總共 5 格
    const stars = [];

    // 綠色星數
    const greenCount = Math.min(difficulty, 2);
    // 黃色星數
    const yellowCount = Math.max(0, Math.min(difficulty - 2, 2));
    // 紅色星數
    const redCount = Number(difficulty) === 5 ? 1 : 0;
    // 灰色星數
    const grayCount = totalStars - (greenCount + yellowCount + redCount);

    // 添加綠色星
    for (let i = 0; i < greenCount; i++) {
      stars.push(
        <img
          key={`green-${i}`}
          src="/img/icon/trekking-pole-green.png"
          alt="Green star"
          className="mr-1 h-6 w-6"
        />,
      );
    }

    // 添加黃色星
    for (let i = 0; i < yellowCount; i++) {
      stars.push(
        <img
          key={`yellow-${i}`}
          src="/img/icon/trekking-pole-yellow.png"
          alt="Yellow star"
          className="mr-1 h-6 w-6"
        />,
      );
    }

    // 添加紅色星
    for (let i = 0; i < redCount; i++) {
      stars.push(
        <img
          key={`red-${i}`}
          src="/img/icon/trekking-pole-red.png"
          alt="Red star"
          className="mr-1 h-6 w-6"
        />,
      );
    }

    // 添加灰色星
    for (let i = 0; i < grayCount; i++) {
      stars.push(
        <img
          key={`gray-${i}`}
          src="/img/icon/trekking-pole-gray.png"
          alt="Gray star"
          className="mr-1 h-4 w-4"
        />,
      );
    }
    console.log("Difficulty:", difficulty);
    console.log(
      "Green:",
      greenCount,
      "Yellow:",
      yellowCount,
      "Red:",
      redCount,
      "Gray:",
      grayCount,
    );

    return stars;
  }

  return (
    <div className="stars flex items-baseline">
      {renderStars(trail.TR_DIF_CLASS)}
    </div>
  );
}

export default Difficulty;
