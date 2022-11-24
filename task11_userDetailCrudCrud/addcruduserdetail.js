const MyForm = document.getElementById('my-form');
const userName = document.getElementById('name');
const userEmail= document.getElementById('email');
const button = document.getElementById('form-button');

button.addEventListener('click',onSubmit)
function onSubmit(e){
    e.preventDefault()

let user_Obj = {
    name: userName.value,
    email: userEmail.value
}
//wee show the data on network not in local
//create a data (POST) 
//we add route
axios.post('https://crudcrud.com/api/86f73aefa9aa46f2bf970aa9555e82b7/Userappoint', user_Obj)
.then((response)=>{
    //console.log(response);
    document.getElementById('show_data').innerHTML= response.data.name + " , "+ response.data.email;
})
.catch((err)=>{
    console.log(err);
})
userName.value = ''
userEmail.value = ''
}