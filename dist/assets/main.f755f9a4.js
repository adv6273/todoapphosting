import{a as t}from"./vendor.d360098b.js";function e(t){iziToast.error({title:"Error",message:t})}function n(t){iziToast.info({title:"Info",message:t})}const o="https://todo-app-csoc.herokuapp.com/";function a(o){const a=o.id,u=o.title,d=document.createElement("li");d.className="list-group-item d-flex justify-content-between align-items-center",d.innerHTML=`\n        <input id="input-button-${a}" type="text" class="form-control todo-edit-task-input hideme" placeholder="Edit The Task">\n        <div id="done-button-${a}"  class="input-group-append hideme">\n            <button class="btn btn-outline-secondary todo-update-task" type="button" id="updateTaskButton-${a}" >Done</button>\n        </div>\n        <div id="task-${a}" class="todo-task">\n            ${u} \n        </div>\n\n        <span id="task-actions-${a}">\n            <button style="margin-right:5px;" type="button" id="editTaskButton-${a}"\n                class="btn btn-outline-warning">\n                <img src="https://res.cloudinary.com/nishantwrp/image/upload/v1587486663/CSOC/edit.png"\n                    width="18px" height="20px">\n            </button>\n            <button type="button" class="btn btn-outline-danger" id="deleteTaskButton-${a}">\n                <img src="https://res.cloudinary.com/nishantwrp/image/upload/v1587486661/CSOC/delete.svg"\n                    width="18px" height="22px">\n            </button>\n        </span>\n    `,document.querySelector("#ul").appendChild(d),document.querySelector(`#deleteTaskButton-${a}`).addEventListener("click",(()=>{!function(o){let a=document.querySelector(`#input-button-${o}`).parentElement;a.parentNode.removeChild(a);const i={id:o};t({url:`https://todo-app-csoc.herokuapp.com/todo/${o}/`,headers:{Authorization:`Token ${localStorage.getItem("token")}`},method:"delete",data:i}).then((t=>{n("Deleted Task")})).catch((t=>{e("Cannot Delete Task")}))}(a)})),document.querySelector(`#editTaskButton-${a}`).addEventListener("click",(()=>{i(a)})),document.querySelector(`#updateTaskButton-${a}`).addEventListener("click",(()=>{!function(n){const o={title:document.querySelector(`#input-button-${n}`).value.trim()};t({url:`https://todo-app-csoc.herokuapp.com/todo/${n}/`,headers:{Authorization:`Token ${localStorage.getItem("token")}`},method:"patch",data:o}).then((({data:t,status:e})=>{document.querySelector(`#task-${n}`).innerHTML=t.title})).catch((t=>{e("Error in updating the task")})),i(n)}(a)}))}function i(t){document.getElementById("task-"+t).classList.toggle("hideme"),document.getElementById("task-actions-"+t).classList.toggle("hideme"),document.getElementById("input-button-"+t).classList.toggle("hideme"),document.getElementById("done-button-"+t).classList.toggle("hideme")}document.querySelector("#logoutButton")&&(document.querySelector("#logoutButton").onclick=function(){localStorage.removeItem("token"),window.location.href="/login/"}),document.querySelector("#registerButton")&&(document.querySelector("#registerButton").onclick=function(){const a=document.getElementById("inputFirstName").value.trim(),i=document.getElementById("inputLastName").value.trim(),u=document.getElementById("inputEmail").value.trim(),d=document.getElementById("inputUsername").value.trim(),s=document.getElementById("inputPassword").value;(function(t,n,o,a,i){return""===t||""===n||""===o||""===a||""===i?(e("Please fill all the fields correctly."),!1):!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(o)||(e("Please enter a valid email address."),!1)})(a,i,u,d,s)&&(n("Please wait..."),t({url:o+"auth/register/",method:"post",data:{name:a+" "+i,email:u,username:d,password:s}}).then((function({data:t,status:e}){localStorage.setItem("token",t.token),window.location.href="/"})).catch((function(t){e("An account using same email or username is already created")})))}),document.querySelector("#loginButton")&&(document.querySelector("#loginButton").onclick=function(){const a=document.getElementById("inputUsername").value.trim(),i=document.getElementById("inputPassword").value;n("Please wait..."),t({url:o+"auth/login/",method:"post",data:{username:a,password:i}}).then((function({data:t,status:e}){localStorage.setItem("token",t.token),window.location.href="/"})).catch((function(t){e("Wrong username or password")}))}),document.getElementById("addTaskButton")&&(document.getElementById("addTaskButton").onclick=function(){const n=document.getElementById("taskForm"),i={title:n.value.trim()};t({url:o+"todo/create/",headers:{Authorization:`Token ${localStorage.getItem("token")}`},method:"post",data:i}).then((e=>{t({url:o+"todo/",headers:{Authorization:`Token ${localStorage.getItem("token")}`},method:"get"}).then((({data:t,status:e})=>{var o;a(t[t.length-1]),o="Added Task",iziToast.success({title:"Success",message:o}),n.value=""}))})).catch((t=>{e("Erron in adding the task")}))});export{a,n as d};