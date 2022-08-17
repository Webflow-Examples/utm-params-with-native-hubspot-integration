// get url parameters
const urlParams = new URLSearchParams(window.location.search);

// iterate through parameters and assign to corresponding input
for (const [key, value] of urlParams) {
  document.querySelector(`input[name="${key}"]`).value = value;
}
