import { Comment } from "../js/Comment.js"

const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")
const addComment = document.getElementById("addComment")
const profileAndPostingTime = document.createElement("div")
const edit = document.createElement("img")

const createComment = () => {
    if(addComment.value){

        const newcomment = new Comment("Victor")
        newcomment.creationTime()
        let textComment = addComment.value

        const li = document.createElement("li")
        const headComment = document.createElement("div")
        headComment.id = "headComment"
        profileAndPostingTime.id = "profileAndPostingTime"
        const profilePicture = document.createElement("img")
        profilePicture.id = "profilePicture"
        profilePicture.src = "./images/avatars/image-juliusomo.png"
        const userName = document.createElement("div")
        userName.id = "userName"
        userName.textContent = newcomment.getAuthor()

        const postingTime = document.createElement("div")
        postingTime.id = "postingTime"
        postingTime.textContent = newcomment.getPostingTime()
        setInterval(() => {
            postingTime.textContent = newcomment.getPostingTime();
        }, 1000);

        
        edit.id = "edit"
        edit.src = "./images/icon-edit.svg"
        const divReply = document.createElement("div")
        divReply.id = "divReply"
        const textReply = document.createElement("div")
        textReply.textContent = "Reply"
        const reply = document.createElement("img")
        reply.id = "reply"
        reply.src = "./images/icon-reply.svg"
        const commentText = document.createElement("div")
        commentText.id = "commentText"
        commentText.textContent = textComment

        profileAndPostingTime.appendChild(profilePicture)
        profileAndPostingTime.appendChild(userName)
        profileAndPostingTime.appendChild(postingTime)
        profileAndPostingTime.appendChild(edit)
        headComment.appendChild(profileAndPostingTime)
        divReply.appendChild(reply)
        divReply.appendChild(textReply) 
        headComment.appendChild(divReply)
        li.appendChild(headComment)
        li.appendChild(commentText)
        comments.appendChild(li)


        addComment.value = ""
    }
}

const delet = () => {
    
    if(!document.getElementById("delet")){
        const delet = document.createElement("img")
        delet.id = "delet"
        delet.src = "./images/icon-delete.svg"
        // profileAndPostingTime.appendChild(delet)

        // edit.id = "check"
    }

}

send.addEventListener("click", createComment)

edit.addEventListener("click", delet)