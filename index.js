generateRendomClicks = () => {
  const hit = Math.random() > 0.5 ? 1 : 0;
  return hit;
};

getValue = () => {
  const getCircle1 = generateRendomClicks();
  if (getCircle1 == 1) {
    arr.push(1);
  } else arr.pop(1);
  let clicks = arr.reduce((a, b) => a + b, 0);
  return clicks;
};

var arr = [];
document.getElementById("demo").innerHTML = arr;

Click = () => {
  const a = getValue();
  document.getElementById("demo").innerHTML = a;
};

stop = () => {
  const finalValue = getValue();
  alert("final score", +finalValue);
  arr.length = 0;
  document.getElementById("demo").innerHTML = arr;
};

play = () => {
  arr.length = 0;
  document.getElementById("demo").innerHTML = arr;
};
