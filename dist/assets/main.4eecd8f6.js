import{d as o,a as t}from"./main.f755f9a4.js";import{a as e}from"./vendor.d360098b.js";null==window.localStorage.getItem("token")&&(window.location.href="/login/");e({headers:{Authorization:"Token "+localStorage.getItem("token")},url:"https://todo-app-csoc.herokuapp.com/auth/profile/",method:"get"}).then((function({data:o,status:a}){document.getElementById("avatar-image").src="https://ui-avatars.com/api/?name="+o.name+"&background=fff&size=33&color=007bff",document.getElementById("profile-name").innerHTML=o.name,e({headers:{Authorization:"Token "+localStorage.getItem("token")},url:"https://todo-app-csoc.herokuapp.com/todo/",method:"get"}).then((({data:o,status:e})=>{o.forEach((o=>{t(o)}))})).catch((o=>console.error(o)))})).catch((t=>{o("Login To Save List")}));