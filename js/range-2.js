
function controlfromInput2(fromSlider2, fromInput2, toInput2, controlSlider) {
    const [from, to] = getParsed(fromInput2, toInput2);
    console.log('1')
    fillSlider(fromInput2, toInput2, '#C6C6C6', '#25daa5', controlSlider);
    if (from > to) {
        fromSlider2.value = to;
        fromInput2.value = to;
    } else {
        fromSlider2.value = from;
    }
}
    
function controltoInput2(toSlider2, fromInput2, toInput2, controlSlider) {
    const [from, to] = getParsed(fromInput2, toInput2);
    fillSlider(fromInput2, toInput2, '#C6C6C6', '#25daa5', controlSlider);
    setToggleAccessible(toInput2);
    if (from <= to) {
        toSlider2.value = to;
        toInput2.value = to;
    } else {
        toInput2.value = from;
    }
}

function controlfromSlider2(fromSlider2, toSlider2, fromInput2) {
  const [from, to] = getParsed(fromSlider2, toSlider2);
  fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#25daa5', toSlider2);
  if (from > to) {
    fromSlider2.value = to;
    fromInput2.value = to;
  } else {
    fromInput2.value = from;
  }
}

function controltoSlider2(fromSlider2, toSlider2, toInput2) {
  console.log(fromSlider2.value);
  const [from, to] = getParsed(fromSlider2, toSlider2);
  fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#25daa5', toSlider2);
  setToggleAccessible(toSlider2);
  if (from <= to) {
    toSlider2.value = to;
    toInput2.value = to;
  } else {
    toInput2.value = from;
    toSlider2.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    $('.range-2 .range-min span').text(fromPosition);
    $('.range-2 .range-max span').text(toPosition);
}

function setToggleAccessible(currentTarget) {
  const toSlider2 = document.querySelector('#toSlider2');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider2.style.zIndex = 2;
  } else {
    toSlider2.style.zIndex = 0;
  }
}

const fromSlider2 = document.querySelector('#fromSlider2');
const toSlider2 = document.querySelector('#toSlider2');
const fromInput2 = document.querySelector('#fromInput2');
const toInput2 = document.querySelector('#toInput2');
fillSlider(fromSlider2, toSlider2, '#C6C6C6', '#25daa5', toSlider2);
setToggleAccessible(toSlider2);

fromSlider2.oninput = () => controlfromSlider2(fromSlider2, toSlider2, fromInput2);
toSlider2.oninput = () => controltoSlider2(fromSlider2, toSlider2, toInput2);
fromInput2.oninput = () => controlfromInput2(fromSlider2, fromInput2, toInput2, toSlider2);
toInput2.oninput = () => controltoInput2(toSlider2, fromInput2, toInput2, toSlider2);