
getUsers()
getpost()





function UserCrrentId(){
   
    const urlprams = new URLSearchParams(window.location.search)
    const id = urlprams.get('userid')
    return id
}
function getUsers(){
//ToggelLoader(true)
  const id = UserCrrentId()
    axios.get(`${url}users/${id}`)
      .then((response) =>{
       //ToggelLoader(false)
    
        const user = response.data.data
        
        document.getElementById('email-info').innerHTML = user.email
        document.getElementById('name-info').innerHTML = user.name
        document.getElementById('username-info').innerHTML =user.username
        document.getElementById('posts').innerHTML = user.posts_count
        document.getElementById('image').src= user.profile_image
        document.getElementById('name-info-Aksour').innerHTML = user.name
        document.getElementById('comment').innerHTML =user.comments_count

       if (user.email == null) {
         document.getElementById('email-info').innerHTML= "Aksourhoussin@gmail.com"
      }
        
      })
 
}


function getpost() {
 const id = UserCrrentId()

  axios.get(`${url}users/${id}/posts`)
    .then((response) => {
      let Posts = response.data.data;
      console.log(Posts);

      document.getElementById('colome').innerHTML = "";

      for (let index = 0; index < Posts.length; index++) {
        const element = Posts[index];
        let title1 = element.title;

        // ---------------- Show or Hide Edit/Delete ----------------
        let ShowButtonDelete = "";
        let ShowButtonEdit = "";
        let users = r();
        if (users != null && element.author.id == users.id) {
          ShowButtonEdit = `
            <button id="buttonedit" onclick="ClickedButtonId(&quot;${encodeURIComponent(JSON.stringify(element))}&quot;)">edit</button>
          `
          ShowButtonDelete = `
            <button id="buttonDelete" onclick="ButtonDelete(&quot;${encodeURIComponent(JSON.stringify(element))}&quot;)">Delete</button>
          `
        }

        if (title1 === null) {
          element.title = "";
        }

        // ---------------- Card ----------------
        let Data = `
          <div class="card" style="margin-top: 50px;">
            <div class="card-header" style="display: flex; align-items: center; gap: 10px;">
              <img src=${element.author.profile_image} alt="" style="width: 40px; height: 40px;">
              <b style="font-size: 20px; font-weight: bold;">${element.author.username}</b>
              ${ShowButtonEdit}
              ${ShowButtonDelete}
            </div>

            <div class="card-body shadow" onclick="PostClicked(${element.id})" style="cursor: pointer">
              <img src=${element.image} alt="" style="width: 100%;">
              <h6 style="color: rgb(131, 129, 129); margin-top: 5px;">${element.created_at}</h6>
              <h5>${element.body}</h5>
              <p style="font-weight: normal;">${element.title}</p>
              <hr>
              <div>
                <span style="font-weight: 400;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-pencil" viewBox="0 0 16 16" style="margin-right: 10px;">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 
                             13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 
                             4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 
                             5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 
                             0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 
                             0 0 1-.468-.325"/>
                  </svg>
                  Commets (${element.comments_count})
                  <span id="policy-${element.id}"></span>
                </span>
              </div>
            </div>
          </div>
        `;

        // نضيف الكارت
        
          document.getElementById('colome').innerHTML  += Data
        

        // ---------------- Add tags from API ----------------
        const target = document.getElementById(`policy-${element.id}`);
        if (target && element.tags) {
          element.tags.forEach(tag => {
            target.innerHTML += `<div><h6>${tag.name}</h6></div>`;
          });
        }
      }
    });
  
}

////////////////////////////////////////////////////////
setupUI()


