console.log('Hello from js/scripts.js!');

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so Tom, Bennie and :insertx: went for a walk. When they got to :inserty:, they stared in excitement for a few moments, then :insertz:. Bob ordered and ate the whole thing, but no one was surprised since Bob weighs 300 pounds, and it was a hot day.';
let insertX = ['David','Angela','Mary'];
let insertY = ['the candy store','the ice cream store','the donuts store'];
let insertZ = ['started jumping up and down','put a big smile on their faces','started ordering'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Tom',name);
  }

  if(customName.value !== '') {
  const name = customname2.value;
  newStory = newStory.replace('Bennie',name);
}

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286) + 'stone';
    let temperature =  Math.round((94-32)*5/9) + 'centigrade';
    newStory = newStory.replace('300 pounds',weight);
    ewStory = newStory.replace('94 fahrenheit',temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
