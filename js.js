

const API_URL = "https://tarmeezacademy.com/api/v1/"
let CreentPage = 1
 let LastPage = 1 ;

 
///  console.log(LastPage);
window.addEventListener('scroll', function () {
  const Page = window.innerHeight  + window.scrollY +10 >= document.documentElement.scrollHeight;

  
  if ( Page && CreentPage < LastPage) {
    
    CreentPage == CreentPage + 1
  ToggelLoader(Page)
    getpost(false , CreentPage) 
  }else{

    ToggelLoader(false)

  }
})

function UserCliked(UserId){

window.location = `Profaile.html?userid=${UserId}`

}



function setupUI(){

     const Token  = localStorage.getItem('token')
     const DinBuTTON = document.getElementById('exampleModal')
     const regesterButton = document.getElementById('regesterButton')
     const buttonlogouT = document.getElementById('logoutbutton')
     const plus = document.querySelector('.plus')
     const ImageAndUser = document.querySelector('.MamaLove')
  
  if(Token != null) 
  {
     DinBuTTON.style.visibility = "hidden"
     regesterButton.style.visibility = "hidden"
     buttonlogouT.style.visibility = 'visible'
  if (plus != null) {
      plus.style.display = "block"
     }
     
     ImageAndUser.style.visibility = "visible"
     const user = r()
     document.getElementById('username').innerHTML = user.username 
     document.getElementById('image-input-aksdsour').src = user.profile_image
  }else{
     DinBuTTON.style.visibility = "visible"
     regesterButton.style.visibility ="visible"
     buttonlogouT.style.visibility = 'hidden'
  if (plus != null) {
     plus.style.display = "none"
    }
     ImageAndUser.style.visibility = "hidden"
         
  }
}
 function ButtonLOGOUT(){
 
     localStorage.removeItem('username')
     localStorage.removeItem('token')
     setupUI()
  
if (aksour1.style.visibility = "hidden") {
 
     x.style.visibility = "visible"
     setTimeout(() => {
    x.style.visibility = "hidden" 
      
 }, 2000);
}
     document.querySelector('.MamaLove').style.visibility = "hidden"
  // document.querySelector('.MamaLove').style.transition = "0.2s";
  
  
  }
    let title1 = "" ;

function  getpost(realod = true , pagew =1 , )

{
     ToggelLoader(true) 
     axios.get(`${API_URL}posts?limit=&page=${pagew}`)
    .then((response =>{
     LastPage = response.data.meta.last_page
     let Posts = response.data.data
     ToggelLoader(false)
    if (realod) {
    document.querySelector('.d-flex .col-9').innerHTML = ""
    }
    

     
   ///////////////////////////////////////////////////////////////For LOOp/*/////////////////////////////////////////////////////////////////////////////////////////
    
for (let index = 0; index < Posts.length; index++) {

      const element = Posts[index];
      const tags = response.tags
      title1 = element.title;
    /////////////////////////////////// Show or Hidden The buttonEdit/////////////////////////////////////////////////////////////////////////
    
   let ShowButtonEdit = ""

     let users = r()
        if (users != null) {
      if (element.author.id == users.id) {

      ShowButtonEdit = `<button id="buttonedit" onclick="ClickedButtonId('${encodeURIComponent(JSON.stringify(element))}')">Edit</button>
      <button id="buttonDelete" onclick="ButtonDelete('${encodeURIComponent(JSON.stringify(element))}')">Delete</button>
      `

 }else{
   ShowButtonEdit = ""
 
 }
}

  
     /////////////////////////////////// Show or Hidden The buttonEdit/////////////////////////////////////////////////////////////////////////

if (title1 === null) {
      element.title = "";
                     }
        let Data = `

      <div class="card" style="margin-top: 50px; " >
      <div class="card-header" style="display: flex;  align-items: center; gap: 10px; ">
      <span style ="cursor: pointer;"  onclick="UserCliked(${element.author.id})">
      <img src=${element.author.profile_image} alt="" style="   width: 40px; height: 40px; ;">
      <b style="font-size: 20px; font-weight: bold ; ">${element.author.username}<b>
     </span>
             ${ShowButtonEdit}
            
</div>
      <div class="card-body shadow" onclick = "PostClicked(${element.id})" style = "cursor : pointer">
        <img src=${element.image} alt="" style="width: 100%;">
         <h6  style="color: rgb(131, 129, 129); margin-top: 5px;">${element.created_at}</h6>
         <h5>${element.body}</h5>
            <hr>
            <div>

                <span style="font-weight: 400;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style="margin-right: 10px;">
                       <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                      </svg>
                     
                        Commets (${element.comments_count}) 
                      <span id ="policy-${element.id}">  

                       <div><h6>policy</h6></div>  <div><h6>economy</h6></div>  <div><h6>enteratainment</h6></div>
                      </span>
                </span>
            </div>    
            </div>
       
                                        
                  `   
         
   let comole =  document.querySelector('.d-flex .col-9')
   if (comole) {
     document.querySelector('.d-flex .col-9').innerHTML += Data;
   }
     const crrenetpost = `policy-${element.id}`
          ///  document.getElementById(crrenetpost).innerHTML = ""

 for (let index = 0; index < tags; index++) {
     const element = tags[index];
     const reaselt = `
               <span class ="policy">  

                       <div><h6>${element.tags}</h6></div>  
                      </span>  
              
              `
     document.getElementById(crrenetpost).textContent += reaselt
             }    
              
      }
       }))
 
}
 getpost()

      const logoutbutton = document.getElementById('logoutbutton')
      const aksour1 = document.querySelector('.aksour')
      const x = document.querySelector('.x')


function RegisterName(imp){

      const Password = document.getElementById('Register-password-input').value
      const UserName = document.getElementById('Register-Username-input').value
      const Name     = document.getElementById('Register-name-input').value
      const image = document.getElementById('Register-image-input').files[0]

              


     var formdata = new FormData()
     formdata.append('password' ,Password)
     formdata.append('username' , UserName)
     formdata.append('name' , Name )
     formdata.append('image' , image)
          
  axios.post(`${API_URL}register`,formdata)
    .then((response) =>{
     const Token = response.data.token
     const username = response.data.user.username
     localStorage.setItem('token', JSON.stringify(Token))
     localStorage.setItem('user' ,  username)
     AlertShowlogin( "تم تسجيل الدخول الاعدادات بنجاح")
     const modal =  document.getElementById('rigester-modal')
     const modalinstans =  bootstrap.Modal.getInstance(modal)
     modalinstans.hide()
 }).catch((e)=>{
        CatchError(e.response.data.message)   

})
   
            
}




function r(){
           
          let  user = null 
          const locaUser = localStorage.getItem('username')
          if (locaUser != null) {
           user = JSON.parse(locaUser)
                  
          }    

          return user 
}

function RegisterName(imp){

         const Password = document.getElementById('Register-password-input').value
         const UserName = document.getElementById('Register-Username-input').value
         const Name     = document.getElementById('Register-name-input').value
         const image = document.getElementById('Register-image-input').files[0]

              


         var formdata = new FormData()
        formdata.append('password' ,Password)
        formdata.append('username' , UserName)
        formdata.append('name' , Name )
        formdata.append('image' , image)
          
axios.post(`${API_URL}register`,formdata)
    .then((response) =>{
        const Token = response.data.token
        const username = response.data.user.username

        localStorage.setItem('token', JSON.stringify(Token))
        localStorage.setItem('user' ,  username)
        AlertShowlogin( "تم تسجيل الدخول الاعدادات بنجاح")
        const modal =  document.getElementById('rigester-modal')
        const modalinstans =  bootstrap.Modal.getInstance(modal)
        modalinstans.hide()     
 }).catch((e)=>{
         CatchError(e.response.data.message)
})
   
            
}
 function PostClicked(id) {

         window.location = `postillizi.html?id=${id}`
 }

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function AddbuttonCliked()
{
            document.getElementById('houssinaksour').textContent = "Create";
            document.getElementById('Create-New-Title-Input').value = ""
            document.getElementById('Create-Body-textarea').value = ""
            document.getElementById('Create-new-post').innerHTML= "Create A New Post"
            document.getElementById('input-id-post').value = null || ""
            
            let Posttitle = new bootstrap.Modal(document.getElementById('create-post-modal') , {})
             Posttitle.toggle()

}
  function ToggelLoader(ShwoLoader = true){

    if (ShwoLoader) {
    document.getElementById('ShowLoader').style.visibility = "visible"
    }else if (ShwoLoader ==  false) {
      document.getElementById('ShowLoader').style.visibility = "hidden"
    }
      
    
  }