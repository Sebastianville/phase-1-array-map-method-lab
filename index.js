const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return  tutorials.map((newTitle) =>{
    let splitArray = newTitle.split(" ")
    let upperCase = splitArray.map((secondTitle) =>{
       return secondTitle = secondTitle[0].toUpperCase() + secondTitle.slice(1)
    })
  let secondUpperCase = upperCase.join(" ")
  return secondUpperCase
 })
}
 console.log(titleCased())
