const MyForm = document.getElementById("my-form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const button = document.getElementById("form-button");

button.addEventListener("click", onSubmit);
let _id = null;
//GET REQUEST
document.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/d9eb1947da244b14ae28090c868cae38/Userappoint"
    )
    .then((res) => {
      showOutput(res.data);
    })
    .catch((err) => console.error(err));
});



//POST REQUEST
function onSubmit(e) {
  e.preventDefault();

  let user_Obj = {
    name: userName.value,
    email: userEmail.value,
  };
  //wee show the data on network not in local create a data (POST) we add route

//this is for edit button
  if (_id) {               //if _id is not null they have some value in update solution 
    // console.log({...user_Obj, _id:_id});
    try {
      showOutput([{ name: userName.value, email: userEmail.value, _id: _id }]);
        //console.log("Updating Data", _id);
      axios
        .put(
          `https://crudcrud.com/api/d9eb1947da244b14ae28090c868cae38/Userappoint/${_id}`,
          {
            name: userName.value,
            email: userEmail.value,
          }
        )
    } catch (error) {
      console.log(error);
    }
  } else {
    //console.log("else runninng");

    // if _id is null
    axios
      .post(
        "https://crudcrud.com/api/d9eb1947da244b14ae28090c868cae38/Userappoint",
        user_Obj
      )
      .then((res) => {
        showOutput([res.data]);
      })
      .catch((err) => console.error(err));
  }

  userName.value = "";
  userEmail.value = "";
}

//Show OUTPUT
function showOutput(arr) {
  arr.map((item) => {
    //console.log("objectshououtput", item._id);

    ///////////////////////////Show All REQUEST DATA///////////////////////////////

    const PerantDiv = document.getElementById("parent_div_show_data");

    const After_parent_ul = document.createElement("item-ul");
    const eleli = document.createElement("li");
    const name_p = document.createElement("p");
    const email_p = document.createElement("p");

    After_parent_ul.classList.add("list-group"); //ul
    eleli.classList.add("list-group-item"); //li

    name_p.classList.add("name-p"); //p
    email_p.classList.add("email-p"); //p

    //button
    const Editbtn = document.createElement("button");
    const Deletebtn = document.createElement("button");

    Editbtn.classList.add("btn-dark");
    Editbtn.classList.add("btn");
    Deletebtn.classList.add("btn-dark");
    Deletebtn.style.marginLeft = "15px";
    Deletebtn.classList.add("btn");

    Editbtn.innerText = "Edit";
    Deletebtn.innerText = "Delete";

    //data insert into p tag

    name_p.innerHTML = item.name;
    email_p.innerHTML = item.email;

    //email_p.innerHTML=`${obj.data.email}`

    //insert all he data into div
    PerantDiv.appendChild(After_parent_ul);
    After_parent_ul.appendChild(eleli);
    eleli.appendChild(name_p);
    eleli.appendChild(email_p);
    eleli.appendChild(Editbtn);
    eleli.appendChild(Deletebtn);

    Deletebtn.addEventListener("click", deleteFun);
    Editbtn.addEventListener("click", editFun);

    function deleteFun() {
      Deletebtn.parentElement.remove();

      axios
        .delete(
          `https://crudcrud.com/api/d9eb1947da244b14ae28090c868cae38/Userappoint/${item._id}`
        )
        .then((ress) => {
          //console.log(ress)
          return;
        })
        .catch((err) => console.log(err));
    }

    function editFun() {
      const email = Editbtn.previousSibling.innerText;

      const name = Editbtn.previousSibling.previousSibling.innerText;

      _id = item._id;
      //console.log("Edit Clicked" ,_id);
      userEmail.value = email;
      userName.value = name;


      //remaining code inside submit if(_id) and try


      Editbtn.parentElement.remove();
    }
  });
}
