const savedData = localStorage.getItem('email');
if (savedData === null) {
  document.location.href = "login.html"
} else {
  getData()
}

const getData = () => {
  
}