document.addEventListener("DOMContentLoaded", () => {
  let firstBoxCreated = false; // 첫 번째 박스 생성 여부 확인
  let boxSize = 70; // 박스 크기
  let interactionCount = 0; // 인터랙션 횟수

  // 화면 내 랜덤 좌표 생성 함수
  function getRandomPosition() {
    return {
      x: Math.floor(Math.random() * (window.innerWidth - boxSize)),
      y: Math.floor(Math.random() * (window.innerHeight - boxSize)),
    };
  }

  // 초기 위치를 랜덤으로 설정
  let currentPosition = getRandomPosition();

  // 방향별 랜덤 이미지 URL 배열
  const images = {
    up: [
      "https://i.postimg.cc/9zHRNr08/image.avif",
      "https://i.postimg.cc/N0xhzMGN/20m.avif",
      "https://i.postimg.cc/7L9cNWXd/image.avif",
      "https://i.postimg.cc/hGQsXZ6V/image.avif",
      "https://i.postimg.cc/W3n5VFxy/image.avif",
      "https://i.postimg.cc/jSPQKn7h/image.avif",
      "https://i.postimg.cc/cLywD1bt/image.avif",
      "https://i.postimg.cc/q7QKMsM2/image.avif",
      "https://i.postimg.cc/k5jyh38r/image.avif",
      "https://i.postimg.cc/x8LMQWk1/temp-Image-Npe-MLT.avif",
      "https://i.postimg.cc/d1yTRzjj/image.avif",
      "https://i.postimg.cc/HkkcvJtx/image.avif",
      "https://i.postimg.cc/4xyybDJH/image.avif",
      "https://i.postimg.cc/zfnrn7RR/image.avif",
      "https://i.postimg.cc/FHS54ppn/image.avif",
      "https://i.postimg.cc/SQ1wY3tv/image.avif",
      "https://i.postimg.cc/Gt67g0W3/image.avif",
      "https://i.postimg.cc/x8G55k35/image.avif",
      "https://i.postimg.cc/G3PxZyvJ/image.avif",
      "https://i.postimg.cc/Z5Q8rFhZ/image.avif",
      "https://i.postimg.cc/43t9VD5b/10m.avif",
      "https://i.postimg.cc/qM5hYJDx/image.avif",
      "https://i.postimg.cc/6QLQ9tcS/1.avif",
      "https://i.postimg.cc/VNY8WM9G/2.avif",
      "https://i.postimg.cc/1XNh3KPt/image.avif",
      "https://i.postimg.cc/FKWHfDtg/temp-Image-Oc-OAnj.avif"
    ],
    down: [
      "https://i.postimg.cc/DfWPwNV6/image.avif",
      "https://i.postimg.cc/QMHHJRJn/image.avif",
      "https://i.postimg.cc/1Rp4B0DP/1.avif",
      "https://i.postimg.cc/Y2fqYrwC/image.avif",
      "https://i.postimg.cc/J0PLgh13/image.avif",
      "https://i.postimg.cc/mD4Wg9kN/image.avif",
      "https://i.postimg.cc/PrP9hyKn/image.avif",
      "https://i.postimg.cc/fTt21LTw/image.avif",
      "https://i.postimg.cc/sXgKmfNC/image.avif",
      "https://i.postimg.cc/W1mnPJRP/image.avif",
      "https://i.postimg.cc/qvG5xFvn/1.avif",
      "https://i.postimg.cc/RFwfwkMx/image.avif",
      "https://i.postimg.cc/g0F23nrr/image.avif",
      "https://i.postimg.cc/Dwmx1wRV/image.avif",
      "https://i.postimg.cc/bwQsCQ71/image.avif",
      "https://i.postimg.cc/3rmNJjwV/image.avif",
      "https://i.postimg.cc/X7NWS9Bw/image.avif",
      "https://i.postimg.cc/QCX2DrCX/image.avif",
      "https://i.postimg.cc/x8x4SJBR/image.avif",
      "https://i.postimg.cc/R05b9zpj/image.avif",
      "https://i.postimg.cc/FKVG4kLL/image.avif",
      "https://i.postimg.cc/BbLxXjXN/image.avif",
      "https://i.postimg.cc/3w8m2Skk/image.avif",
      "https://i.postimg.cc/4xT0t9pY/image.avif"
    ],
    left: [
      "https://i.postimg.cc/nhCX4XZt/temp-Imageq-RMh63.avif",
      "https://i.postimg.cc/6qW3y3zg/00.avif",
      "https://i.postimg.cc/Pq1ryZR0/1-1.avif",
      "https://i.postimg.cc/nV9j9jFb/image.avif",
      "https://i.postimg.cc/zvTGthvy/image.avif",
      "https://i.postimg.cc/dVsV6LY0/image.avif",
      "https://i.postimg.cc/BbfqKvp4/image.avif",
      "https://i.postimg.cc/qqGd6xgx/temp-Image-ILOOdn.avif",
      "https://i.postimg.cc/15WkxtFX/image.avif",
      "https://i.postimg.cc/gjzTQFk3/image.avif",
      "https://i.postimg.cc/2SsXmBSk/image.avif",
      "https://i.postimg.cc/mZmXkng6/image.avif",
      "https://i.postimg.cc/1z1Mbhv4/image.avif",
      "https://i.postimg.cc/qqKx1122/image.avif",
      "https://i.postimg.cc/3JCgW41r/image.avif",
      "https://i.postimg.cc/W11J39tS/image.avif"
    ],
    right: [
      "https://i.postimg.cc/pXY6xdnz/23.avif",
      "https://i.postimg.cc/15HJ2YLK/55m.avif",
      "https://i.postimg.cc/Hkn4KW0p/image.avif",
      "https://i.postimg.cc/3R5XdgsR/image.avif",
      "https://i.postimg.cc/DwSL6jF0/image.avif",
      "https://i.postimg.cc/ZnqCRn5n/image.avif",
      "https://i.postimg.cc/VLpdfYQs/image.avif",
      "https://i.postimg.cc/Zn05mQwy/temp-Imageuv-YYHu.avif",
      "https://i.postimg.cc/zvL86gfC/image.avif",
      "https://i.postimg.cc/Vv3rV1zN/temp-Imagee-Us-Lm-S.avif",
      "https://i.postimg.cc/pybrBZBh/image.avif",
      "https://i.postimg.cc/261nc0n2/image.avif",
      "https://i.postimg.cc/pXHnzWc0/temp-Image8y-FY5-O.avif",
      "https://i.postimg.cc/cJ2vH08B/image.avif",
      "https://i.postimg.cc/sX5ggSz3/2.avif",
      "https://i.postimg.cc/C5mYRsQp/image.avif",
      "https://i.postimg.cc/x1WQNCt8/image.avif",
      "https://i.postimg.cc/9XJjt1Jv/image.avif",
      "https://i.postimg.cc/2jHPBy5Y/image.avif",
      "https://i.postimg.cc/MHX3Y0GS/image.avif",
      "https://i.postimg.cc/MTp9W0VQ/image.avif",
      "https://i.postimg.cc/HWfFtKbv/image.avif",
      "https://i.postimg.cc/zByPCSv1/image.avif",
      "https://i.postimg.cc/y69L7NSn/image.avif",
      "https://i.postimg.cc/DynPFPhy/image.avif",
      "https://i.postimg.cc/Gp8kzMFz/image.avif",
      "https://i.postimg.cc/x8RHqBQj/image.avif",
      "https://i.postimg.cc/50WFgfNN/temp-Image-K0ukzq.avif",
      "https://i.postimg.cc/h4r78WFc/image.avif",
      "https://i.postimg.cc/VkSrcJJk/image.avif",
      "https://i.postimg.cc/zBqG3vGW/image.avif",
      "https://i.postimg.cc/FK49nzcq/image.avif",
      "https://i.postimg.cc/rFRMVxN3/image.avif",
      "https://i.postimg.cc/265NPZ5H/30m.avif"
    ]
  };

  // 첫 번째 박스를 생성하는 함수
  function createFirstBox() {
    if (!firstBoxCreated) {
      createBox(currentPosition.x, currentPosition.y, "initial");
      firstBoxCreated = true; // 첫 번째 박스가 생성되었음을 표시
    }
  }

  // 박스를 이동시키는 함수
  function moveBox(direction) {
    let newPosition = { ...currentPosition };

    // 방향에 따라 박스의 위치 변경
    switch (direction) {
      case "up":
        newPosition.y -= boxSize;
        break;
      case "down":
        newPosition.y += boxSize;
        break;
      case "left":
        newPosition.x -= boxSize;
        break;
      case "right":
        newPosition.x += boxSize;
        break;
    }

    // 새로운 박스를 생성하고 위치를 업데이트
    createBox(newPosition.x, newPosition.y, direction);
    currentPosition = newPosition;

    // 인터랙션 횟수 증가 및 초기화 조건 확인
    interactionCount++;
    if (interactionCount > 100) {
      resetBoxes();
    }
  }

  // 박스를 생성하는 함수
  function createBox(x, y, direction) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    // 방향에 따라 랜덤 이미지 선택 및 추가
    if (direction !== "initial") {
      const img = document.createElement("img");
      const directionImages = images[direction];
      img.src = directionImages[Math.floor(Math.random() * directionImages.length)];
      img.alt = `${direction} Image`;
      img.style.width = "100%";
      img.style.height = "100%";
      box.appendChild(img);
    }

    document.body.appendChild(box);
  }

  // 박스 초기화 함수
  function resetBoxes() {
    document.querySelectorAll(".box").forEach((box) => box.remove());
    currentPosition = getRandomPosition(); // 초기 위치를 랜덤으로 다시 설정
    interactionCount = 0;
    firstBoxCreated = false;
  }

  // 클릭된 위치에서 박스를 생성하는 함수
  function createBoxByClick(e) {
    const cell = e.target.closest(".cell");
    if (firstBoxCreated && cell) {
      let direction = "";

      // 클릭된 셀에 따라 방향을 결정
      if (cell.classList.contains("up")) {
        direction = "up";
      } else if (cell.classList.contains("down")) {
        direction = "down";
      } else if (cell.classList.contains("left")) {
        direction = "left";
      } else if (cell.classList.contains("right")) {
        direction = "right";
      }

      if (direction) {
        moveBox(direction);
      }
    }
  }

  // 셀 클릭 시 박스를 생성하도록 이벤트 리스너 추가
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("click", (e) => {
      if (!firstBoxCreated) {
        createFirstBox();
      }
      createBoxByClick(e);
    });
  });

  // 방향키로 박스를 이동하는 부분
  document.addEventListener("keydown", (e) => {
    if (!firstBoxCreated) {
      createFirstBox();
    }

    switch (e.key) {
      case "ArrowUp":
        moveBox("up");
        break;
      case "ArrowDown":
        moveBox("down");
        break;
      case "ArrowLeft":
        moveBox("left");
        break;
      case "ArrowRight":
        moveBox("right");
        break;
      default:
        return;
    }
  });
});
// 특정 div 요소 가져오기
const textContainer = document.getElementById('text-container');

// 클릭 또는 키보드 입력 시 텍스트 숨기기
function hideText() {
  textContainer.classList.add('hidden');
}

// 이벤트 추가
document.addEventListener('click', hideText);
document.addEventListener('keydown', hideText);
