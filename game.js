// ゲームの準備
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const puyoSize = 32; // ぷよのサイズ

// ぷよのグラフィックス
const puyoImage = new Image();
puyoImage.src = "puyo.png";

// ぷよの位置
let puyoX = 0;
let puyoY = 0;

// ゲームのメインループ
function gameLoop() {
  // キャンバスをクリア
  context.clearRect(0, 0, canvas.width, canvas.height);

  // ぷよの描画
  context.drawImage(puyoImage, puyoX, puyoY, puyoSize, puyoSize);

  // メインループの再実行
  requestAnimationFrame(gameLoop);
}

// ゲームの開始
function startGame() {
  // ユーザーの入力の受け付け
  document.addEventListener("keydown", handleKeyPress);

  // ゲームのメインループ開始
  gameLoop();
}

// ユーザーの入力の処理
function handleKeyPress(event) {
  if (event.key === "ArrowLeft") {
    puyoX -= puyoSize;
  } else if (event.key === "ArrowRight") {
    puyoX += puyoSize;
  } else if (event.key === "ArrowDown") {
    puyoY += puyoSize;
  }
}

// 画像の読み込み完了後にゲームを開始
puyoImage.onload = startGame;
