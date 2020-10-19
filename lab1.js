const render = (property) => {
  document.querySelector(`[data-binding="${property}"]`).innerHTML =
    state.property;
};
var flag = false;

const setState = (state) => {
  return new Proxy(state, {
    set(target, property, value) {
      target.property = value;
      render(property);
    },
  });
};
const state = setState({
  like: 0,
  taskSolution_1: 0,
  taskSolution_2: 0,
  taskSolution_3: 0,
  taskSolution_4: 0,
  taskSolution_5: 0,
  taskSolution_6: 0,
});

const openModalWindow = (blockname, taskname, closename, solutionname) => {
  document.getElementsByClassName(`${blockname}`)[0].style.width = '50%';
  document.getElementsByClassName(`${blockname}`)[0].style.height = 'auto';
  document.getElementsByClassName(`${blockname}`)[0].style.opacity = '1';
  document.getElementsByClassName(`${blockname}`)[0].style.padding = '30px';
  document.getElementsByClassName(`${closename}`)[0].style.display = 'block';
  document.getElementsByClassName(`${taskname}`)[0].style.display = 'block';
  document.getElementsByClassName(`${solutionname}`)[0].style.display = 'block';
  document.querySelector('body').style.background = 'rgba(0,0,0,0.72)';
};

const closeModalWindow = (blockname, taskname, closename, solutionname) => {
  document.getElementsByClassName(`${blockname}`)[0].style.width = '0';
  document.getElementsByClassName(`${blockname}`)[0].style.height = '0';
  document.getElementsByClassName(`${blockname}`)[0].style.opacity = '0';
  document.getElementsByClassName(`${blockname}`)[0].style.padding = '0';
  document.getElementsByClassName(`${closename}`)[0].style.display = 'none';
  document.getElementsByClassName(`${taskname}`)[0].style.display = 'none';
  document.getElementsByClassName(`${solutionname}`)[0].style.display = 'none';

  document.querySelector('body').style.background = 'white';
};

function task_1() {
  debugger;
  let a = 5.46;
  let x = 1.52;
  let solution1 = 0;
  solution1 = (a * Math.sin(Math.pow(x, 2)) + Math.tan(a)) / Math.sqrt(Math.E);
  task_2(solution1);
  state.taskSolution_1 = `Answer: ${solution1}`;
}

function task_2(solution) {
  solution = solution.toString();
  if (solution.length === 1) state.taskSolution_2 = `Answer: ${solution}`;
  else {
    solution = solution.replace('.', '');
    solution = solution.split('');
    let multiply = 1;
    for (i = 0; i < solution.length; i++) {
      solution[i] = +solution[i];
      multiply *= solution[i];
    }
    state.taskSolution_2 = `Answer: ${multiply}`;
  }
}

function task_3() {
  let arr = [];

  for (i = 0; i < 20; i++) {
    let a = Math.round(Math.random() * 100);
    arr.push(a);
  }

  state.taskSolution_3 = `Answer: ${Math.min(...arr)}`;
}

function task_4() {
  let A = [];
  for (let i = 0; i < 5; i++) {
    A[i] = [];
    for (let j = 0; j < 5; j++) {
      A[i][j] = Math.floor(Math.random() * 100);
    }
  }
  let max = A[0][0];
  let index = {};
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (A[i][j] > max) {
        max = A[i][j];
        index = { max: max, index: [i, j] };
      }
    }
  }

  state.taskSolution_4 = `Answer: max: ${index.max}, index: ${index.index}`;
}

function task_5() {
  let A = [];
  let B = [];
  let count = 0;
  for (i = 0; i < 20; i++) {
    let a = Math.round(Math.random() * 100);
    A.push(a);
  }
  for (i = 0; i < 20; i++) {
    let a = Math.round(Math.random() * 100);
    B.push(a);
  }
  for (i = 0; i < A.length; i++) {
    if (A[i] > 0) count++;
  }
  for (i = 0; i < B.length; i++) {
    if (B[i] > 0) count++;
  }
  state.taskSolution_5 = `Answer: ${count}`;
}

function task_6() {
  let name = 'koljya';
  let arrayName = name.split('');
  let num = arrayName.length / 2;
  for (var i = 0; i < arrayName.length; i++) {
    if (
      num
        .toString()
        .split('')
        .find((x) => x == '.') == '.'
    ) {
      arrayName[Math.floor(num)] = '';
    } else {
      arrayName[num - 1] = '';
      arrayName[num] = '';
    }
  }
  state.taskSolution_6 = `Answer: length - ${
    name.length
  } result - ${arrayName.join('')}`;
}
