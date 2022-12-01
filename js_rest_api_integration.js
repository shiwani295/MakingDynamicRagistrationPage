const MyForm = document.querySelector("#my-form");
const expAmountInput = document.querySelector("#expAmount");
const DescriptionInput = document.querySelector("#Description");
const CategoryInput = document.querySelector("#Category");
const buttonSubmit = document.getElementById("btn-id");

buttonSubmit.addEventListener("click", onSubmit);

let _id = null;

document.addEventListener("DOMContentLoaded", function () {
  axios
    .get(
      "https://crudcrud.com/api/9f63a68a9a04426294a84486b4046015/Expencetraker"
    )
    .then((res) => {
      allexpenceshow(res.data);
    })
    .catch((err) => console.log(err));
});

function onSubmit(e) {
  e.preventDefault();
  const obj = {
    amount: expAmountInput.value,
    des: DescriptionInput.value,
    cate: CategoryInput.value,
  };

  //console.log("value of ID", _id);

  if (_id) {
    axios.put(
      `https://crudcrud.com/api/9f63a68a9a04426294a84486b4046015/Expencetraker/${_id}`,obj
    )
    .then(res=>console.log(res))
  }else{
    submitPostObj(obj);
  }

  expAmountInput.value = "";
  DescriptionInput.value = "";
  CategoryInput.value = "";
}
//define the function
function submitPostObj(obj) {
  axios
    .post(
      "https://crudcrud.com/api/9f63a68a9a04426294a84486b4046015/Expencetraker",
      obj
    )
    .then((res) => {
      //console.log([res.data]);
      allexpenceshow([res.data]);
    })
    .catch((err) => console.error(err));
}

function allexpenceshow(obj) {
  //its behave like for each we post and get the data in array form

  obj.map((obj) => {
    //console.log("objectshououtput", item._id);

    // we create div li
    const PerantDiv = document.getElementById("div-parent-items");

    const After_parent_ul = document.createElement("item-ul");
    const eleli = document.createElement("li");
    const amount_p = document.createElement("p");
    const des_p = document.createElement("p");
    const cate_p = document.createElement("p");

    //class
    After_parent_ul.classList.add("list-group"); //ul
    After_parent_ul.style.marginTop = "20px"; //ul css
    eleli.classList.add("list-group-item"); //li
    amount_p.classList.add("exp-p");
    amount_p.style.fontWeight = "700";
    des_p.classList.add("des-p");
    des_p.style.fontWeight = "700";
    cate_p.classList.add("cate-p");
    cate_p.style.fontWeight = "700";

    //button
    const Editbtn = document.createElement("button");
    const Deletebtn = document.createElement("button");

    //button class

    Editbtn.classList.add("btn-dark");
    Editbtn.classList.add("btn");
    Deletebtn.classList.add("btn-dark");
    Deletebtn.style.marginLeft = "15px";
    Deletebtn.classList.add("btn");

    Editbtn.innerText = "Edit";
    Deletebtn.innerText = "Delete";

    //data insert into p tag

    amount_p.innerHTML = `${obj.amount}`;
    des_p.innerHTML = `${obj.des}`;
    cate_p.innerHTML = `${obj.cate}`;

    //insert all he data into div
    PerantDiv.appendChild(After_parent_ul);
    After_parent_ul.appendChild(eleli);
    eleli.appendChild(amount_p);
    eleli.appendChild(des_p);
    eleli.appendChild(cate_p);
    eleli.appendChild(Editbtn);
    eleli.appendChild(Deletebtn);

    //edit and delete function for delete items

    Deletebtn.addEventListener("click", deleteFun);
    Editbtn.addEventListener("click", editFun);

    function deleteFun() {
      Deletebtn.parentElement.remove();

      axios
        .delete(
          `https://crudcrud.com/api/9f63a68a9a04426294a84486b4046015/Expencetraker/${obj._id}`
        )
        .then((res) => {
          //console.log(res)
        })
        .catch((err) => console.log(err));
    }

    function editFun() {
      const amount = Editbtn.previousSibling.previousSibling.previousSibling;
      const des = Editbtn.previousSibling.previousSibling;
      const cate = Editbtn.previousSibling;

      _id = obj._id;

      CategoryInput.value = cate.innerHTML;
      DescriptionInput.value = des.innerHTML;
      expAmountInput.value = amount.innerHTML;

      //get the value and update and submit the data go to submit

      Editbtn.parentElement.remove();
    }
  });
}
