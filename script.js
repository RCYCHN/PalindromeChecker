const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function palindrome(str) {
  var re = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(re,'');

  var reverseStr = lowRegStr.split('').reverse().join('');

  return reverseStr === lowRegStr;
}

checkBtn.addEventListener("click", () => {
  if (!textInput.value) {
    alert("Please input a value")
  } else {
  const inputValue = textInput.value;
  const isPalindrome = palindrome(inputValue);

  result.innerText = isPalindrome ? `${inputValue} is a palindrome` : `${inputValue} is not a palindrome`;
  result.style.display = "block";
  }
})