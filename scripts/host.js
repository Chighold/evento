const savedData = localStorage.getItem('orgName');
if (savedData === null) {
  document.location.href = "login.html"
} else {
  getData()
}

const getData = () => {
  
}