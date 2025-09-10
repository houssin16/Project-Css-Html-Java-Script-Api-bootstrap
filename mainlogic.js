 const url = "https://tarmeezacademy.com/api/v1/"


   function CreateNewPostCliked() 
{
           let postid =   document.getElementById('input-id-post').value
          let Iscreate  = postid == null || postid == ""
          
          const CreateNewTitlePost = document.getElementById('Create-New-Title-Input').value 
          const TextAreapost = document.getElementById('Create-Body-textarea').value
          const ImagePsot = document.getElementById('Create-New-Image').files[0] 

          
          let ulrzxs = `${url}posts`
          let FormDatax  = new FormData()
          FormDatax.append('body' , TextAreapost)
          FormDatax.append('title' , CreateNewTitlePost)
          FormDatax.append('image' , ImagePsot)
          const Token = localStorage.getItem('token')
          const headers = {
        
          "authorization" : `Bearer ${Token}`   

          } 
 if (Iscreate) {
          ulrzxs = `${url}posts`
   
  
 }else{
          FormDatax.append("_method" , "put")
          ulrzxs = `${url}posts/${postid}`
 
 }
 ToggelLoader(true)
 axios.post(ulrzxs,FormDatax, {headers: headers })
          .then((response =>{
             
          let modal = document.getElementById('create-post-modal')
          let modalinsTanse = bootstrap.Modal.getInstance(modal)
          modalinsTanse.hide()
if (Iscreate) {
          AlertShowlogin("تم اضافة بريد جديد")
          getpost()
 }else{
          AlertShowlogin("تم تحديت العنصر ")
          getpost()
  }
        
 })).catch(()=>{

  ToggelLoader(false)
 })
             
  
 
}


 function ClickedButtonId(Object){
        const Objecte = JSON.parse(decodeURIComponent(Object))
      
        document.getElementById('houssinaksour').innerHTML = "update"
        document.getElementById('input-id-post').value = Objecte.id
        document.getElementById('Create-New-Title-Input').value = Objecte.title
        document.getElementById('Create-Body-textarea').value = Objecte.body
        document.getElementById('Create-new-post').innerHTML= "Edit Update"
       
let Posttitle = new bootstrap.Modal(document.getElementById('create-post-modal') , {})
Posttitle.toggle()

}


 function ButtonDelete(Object){
   
         const objecte = JSON.parse(decodeURIComponent(Object))
          let Posttitle = new bootstrap.Modal(document.getElementById('Delete-modal') , {})
            document.getElementById('deleteModelvalue').value = objecte.id
           
            
             Posttitle.toggle()
   
         
      
}
function ConfirmDelete()
{
   let postIDx =  document.getElementById('deleteModelvalue').value;
   let Token = localStorage.getItem('token');
  
  
   
   
     axios.delete(`${url}posts/${postIDx}`,{
       headers:{
               "authorization" : `Bearer ${Token}`   
       }
     }) 
            .then((response)=>{

            
            
             const modal =  document.getElementById('Delete-modal')
             const modalinstans =  bootstrap.Modal.getInstance(modal)
             modalinstans.hide()
             getpost()
             CatchError("تم  حدف البوست .")           
             }).catch(error =>{
                 const Massege = error.data
                CatchError(Massege)
             })   
}

 
function setupUI(){
  const Token  = localStorage.getItem('token')
  const DinBuTTON = document.getElementById('exampleModal')
  const regesterButton = document.getElementById('regesterButton')
  const buttonlogouT = document.getElementById('logoutbutton')
  const plus = document.querySelector('.plus')
  const ImageAndUser = document.querySelector('.MamaLove')
 //const CommentsInput = document.getElementById('CommentsInput')



  
   
  if(Token != null) 
  {
 
 //CommentsInput.style.display = "block"
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
    
 // CommentsInput.style.display = "none"
       DinBuTTON.style.visibility = "visible"
       regesterButton.style.visibility ="visible"
        buttonlogouT.style.visibility = 'hidden'
        if (plus != null) {
           plus.style.display = "none"
        }
        
        ImageAndUser.style.visibility = "hidden"
         
  }
}




/////////

let zzz = ""

/////////////////////////////////////AITHFUNCTION///////////////////////////////////////////////////////////////////////////////
 let Buttonlogin = document.getElementById('Login-modal')


   Buttonlogin.addEventListener('click' , function() {
    
   const username = document.getElementById('username-input')
    const password = document.getElementById('password-input')
   
           const params = {
            "username":username.value,
            "password":password.value,
           }
           ToggelLoader(true)
           axios.post(`${url}login`, params)
            .then((response) =>{
             
             let token = response.data.token
             let user = response.data.user
             localStorage.setItem('token', token)
             localStorage.setItem('username' , JSON.stringify(user)) 
         
             
             const modal =  document.getElementById('login-modal')
             const modalinstans =  bootstrap.Modal.getInstance(modal)
             modalinstans.hide()
             setupUI()
           
             AlertShowlogin("تم التسجيل الدخول بنجاح .")           
             }).catch(error =>{
             
                 const E = error.response.data.message
                 console.log(E);
                 
                   AlertShowlogin(E)
             }).finally(()=>{

              ToggelLoader(false)
             })
            
})


 
    ////////////////////////////////////////////////////////////////////////////////////////
const aksour = document.querySelector('.aksour')
   function AlertShowlogin(result){

   
     aksour.style.visibility = "visible"
     aksour.textContent = result
     setTimeout(() => {
     aksour.style.visibility = "hidden"
     }, 1000); 
      
  }
 
  /////////////////////////////////////////////////////////////////// //////////////////////////       
const Y = document.querySelector('.x')
 function ButtonLOGOUT(){
 
 localStorage.removeItem('username')
 localStorage.removeItem('token')
  setupUI()



if (aksour.style.visibility = "hidden") {
 
  Y.style.visibility = "visible"
  setTimeout(() => {
      Y.style.visibility = "hidden" 
      
 }, 2000);
}
  document.querySelector('.MamaLove').style.visibility = "hidden"
  // document.querySelector('.MamaLove').style.transition = "0.2s";
  
  
  }
  if (document.querySelector('.plus') != null) {
  
   document.querySelector('.plus').style.display = "none" 
   document.querySelector('.plus').style.transition = "1s";
   
}
/////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function r(){

          
          let  user = null 
          const locaUser = localStorage.getItem('username')
          if (locaUser != null) {
                  user = JSON.parse(locaUser)
                
                  
                
                  
          }    
 
     return user 

}



/////////////////////////////////


function RegisterName(){

      const Password = document.getElementById('Register-password-input').value
      const UserName = document.getElementById('Register-Username-input').value
      const Name     = document.getElementById('Register-name-input').value
      const image = document.getElementById('Register-image-input').files[0]

              

    
         var formdata = new FormData()
          formdata.append('password' ,Password)
          formdata.append('username' , UserName)
          formdata.append('name' , Name )
          formdata.append('image' , image)
          ToggelLoader(true)
            axios.post(`${url}register`,formdata)
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
             
           

           }).finally(()=>{

                   ToggelLoader(false)

           })
   
            
}
 

setupUI()
const urlparams = new  URLSearchParams(window.location.search)
const id =  (urlparams.get("id"))
function getpostpage(){
  
   axios.get(`${url}posts/${id}`)
     .then((response) =>{
///////////////////////////////////////////////////////////////////////
 
  
    /////////////////////////////////////////////////////////////////////////
     const post = response.data.data
     const author = post.author
     const coumentss = post.comments
     const image = author.profile_image
     
   // document.getElementById('username-id').innerHTML = author.username
      document.getElementById('Comments').innerHTML = ""

let Commentprox = ""
for (element of coumentss) {
  Commentprox += ` 
    <div style="background-color: rgb(143, 145, 145); padding: 10px;">
      <div style="padding: 10px; display: flex; align-items: center; gap: 15PX;">
        <img src="${element.author.profile_image}" style="width: 35px; height: 35px; border-radius: 50%;" alt="">
        <b>@${element.author.username}</b>
      </div>
      <p style="font-weight: bold;">${element.body}</p>
    </div>
  `
}

document.getElementById('Comments').innerHTML += Commentprox
                  const username = `
                    <img src=${image} alt="" id="imagepost">
               <h1 >
                ${post.author.username}
                 </h1>
           
            `
           document.getElementById('post').innerHTML = username
              
             const result = `
             
             
            <div class="card" style="margin-top: 50px;" >
 
      <div class="card-header" style="display: flex;  align-items: center; gap: 10px;">
      <img src=${author.profile_image} alt="" style="   width: 40px; height: 40px; ;">
      <b style="font-size: 15px; font-weight: bold ;">${post.author.username}<b>
      </div>
  
      <div class="card-body shadow" style = "cursor : pointer">
        <img src=${post.image} alt="" style="width: 100%;">
         <h6  style="color: rgb(131, 129, 129); margin-top: 5px;">${post.created_at}</h6>
         <h5>${post.body}</h5>
          <p style="font-weight: normal;">${post.title}
  
         </p>
            
            <hr>
            <div>

                <span style="font-weight: 400;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style="margin-right: 10px;">
                       <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                      </svg>
                     
                        Commets (${post.comments_count}) 
                      <span id ="policy-${post.id}">  

                       <div><h6>policy</h6></div>  <div><h6>economy</h6></div>  <div><h6>enteratainment</h6></div>
                      </span>
                </span>
            </div>    
        
            
            </div>
        </div>
          </div>   
             `
            
            document.getElementById('postx').innerHTML = result  
           
            let a = `
            <div class="Coment" id ="${"mama"}">
        
             <input id="input" type="text" placeholder=" Comments" style="width: 88%; height: 35px;" >
             <input id="submit" type="submit" value="Send" style="width:92px; margin-left: 0.8px;height: 35px; " onclick = "SubmitComments()">
            </div>
            
            `
           document.getElementById('postx').innerHTML += a
           
          
           
           
         
       
       
          

     })

}
 getpostpage()


const Token = localStorage.getItem('token')
 function SubmitComments()
{

  
let input = document.getElementById('input').value ;
      
     const params = {
          
          "body" : input
     }
 
         axios.post(`${url}posts/${id}/comments`,params ,{

          headers:{
            "Authorization" : `Bearer ${Token}`
          }
         } ,
         

         )
          
          .then((response) =>{
            
             
        const CommentElement = response.data.data
        const author = CommentElement.author
        
       
     let Commentprox = ""

  Commentprox += ` 
    <div style="background-color: rgb(143, 145, 145); padding: 10px;">
      <div style="padding: 10px; display: flex; align-items: center; gap: 15PX;">
        <img src="${author.profile_image}" style="width: 35px; height: 35px; border-radius: 50%;" alt="">
        <b>@${author.username}</b>
      </div>
      <p style="font-weight: bold;">${CommentElement.body}</p>
    </div>
  `

document.getElementById('Comments').innerHTML += Commentprox
document.getElementById('input').value =""         
        
       AlertShowlogin('A Comment Has Be Added')
       setupUI()
      

          }).catch((e) =>{
         
          const Error = e.response.data.errors.body[0]
         Y.textContent = Error
          Y.style.visibility = "visible"
          Y.classList.add('Error')
         setTimeout(() => {
            Y.style.visibility = "hidden"
            
        }, 2000);
          
          })

   } 

 function CatchError(Error){

     const s = document.querySelector('.s')
     s.style.visibility = "visible"
     s.textContent = Error
     setTimeout(() => {
     s.style.visibility = "hidden"
 }, 1000);
}



function ProfileCliikd(){
   const username = localStorage.getItem('username')
   UsrnameToId = JSON.parse(username)
  
   window.location = `Profaile.html?userid=${UsrnameToId.id}`   

}

  function ToggelLoader(ShwoLoader = true){

    if (ShwoLoader) {
    document.getElementById('ShowLoader').style.visibility = "visible"
    }else if (ShwoLoader ==  false) {
      document.getElementById('ShowLoader').style.visibility = "hidden"
    }
      
    
  }
