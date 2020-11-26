let number = Math.floor(Math.random() * 10);

function guess() {
  const input = document.getElementById("input"); 
  if(input.value > number) {
    alert('You went to high, go lower');
  } else if (input.value < number) {
    alert('You went to low, go higher');
  } else if (input.value = number) {
    alert('You guessed it');
    number = Math.floor(Math.random() * 10);
  } 
}

const btn = document.getElementById("btn");
btn.addEventListener("click", guess, false);