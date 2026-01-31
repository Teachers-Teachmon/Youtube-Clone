export default function processView(view: number): string {
  const unit = ["", "천", "만", "억"];
  let unitIndex: number;

  if (view < 1000) unitIndex = 0;
  else if (view < 10000) {
    view = view / 1000;
    unitIndex = 1;
  } else if (view < 1000000000) {
    view = view / 10000;
    unitIndex = 2;
  } else {
    view = view / 100000000;
    unitIndex = 3;
  }
  const result = view.toFixed(1);

  return `조회수 ${result + unit[unitIndex]}회`;
}
