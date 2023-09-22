// Function untuk membaca isi inputan form
function handleGetFormData() {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    let zipCode = document.getElementById('zip-code').value;
    let status = document.getElementById('status').checked;
  
    return { name, city, email, zipCode, status };
  }
  
  // Function untuk memeriksa apakah suatu string hanya terdiri dari angka
  function isNumber(input) {
    return !isNaN(input);
  }
  
  // Function untuk memeriksa apakah checkbox dicentang
  function checkboxIsChecked() {
    return document.getElementById('status').checked;
  }
  
  // Function untuk memvalidasi data form
  function validateFormData(formData) {
    if
      (formData!==null && !isNaN(formData.zipCode) && document.getElementById("status").checked ==true){
          return true;
      } else{
          return false;
      }
  }
  
  // Function untuk submit
  function submit () {
  const formData = handleGetFormData()
      if 
      (validateFormData(formData)) {
          document.getElementById('warning').textContent = '';
      } else {
          document.getElementById('warning').textContent = 'Periksa form anda sekali lagi';
      }
  }
  document.getElementById('FormData').addEventListener('submit', submit);