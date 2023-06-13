// ぷよぷよのステージの幅と高さ
const stageWidth = 6;
const stageHeight = 12;

// ぷよぷよのぷよの色
const colors = ["red", "blue", "green", "yellow"];

// ぷよぷよのステージを表す二次元配列
let stage = [];

// 初期化関数
function init() {
  // ステージを空の状態に初期化
  for (let y = 0; y < stageHeight; y++) {
    stage[y] = [];
    for (let x = 0; x < stageWidth; x++) {
      stage[y][x] = null;
    }
  }
}

// ぷよを落とす関数
function dropPuyo() {
  // TODO: ぷよを落とす処理を実装する
}

// ぷよぷよのゲームループ
function gameLoop() {
  // TODO: ゲームループの処理を実装する
}

// ゲームを開始する関数
function startGame() {
  init();
  gameLoop();
}

// ゲームの開始
startGame();
