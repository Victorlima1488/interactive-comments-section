// Importação da classe Comments.
import { Comment } from "../js/Comment.js"
// import { editFunction, deletFunction, replyFunction, textReplyFunction, replyEditFunction, replyDeletFunction } from "../functions.js"

// criação das variáveis globais.
const comments = document.getElementById("comments")
const send = document.getElementById("sendComment")
const addComment = document.getElementById("addComment")
const newSend = document.getElementById("newSend")
let selectComment = []
let newIdComment = 0

//Função principal, onde os comentários são criados.
const createComment = () => {
    if(addComment.value){

        // Variáveis de contagem para as operações codicionais em algumas funções.
        let counter1 = 0
        let counter2 = 0

        // Instanciadno a classe Comment.
        const newComment = new Comment("Victor", "@_vitorlimaa_")
        newComment.creationTime()

        newIdComment += 1
        newComment.setId(newIdComment)
        console.log("O ID atual é: " + newComment.getId())
        
        selectComment.push(newComment.getId())
        console.log(selectComment)

        //Criação dos elementos que irão compor o comentário.
        let textComment = addComment.value

        const li = document.createElement("li")

        const commentHeader = document.createElement("div")
        commentHeader.id = "commentHeader"

        const profileAndPostingTime = document.createElement("div")
        profileAndPostingTime.id = "profileAndPostingTime"

        const profilePicture = document.createElement("img")
        profilePicture.id = "profilePicture"
        profilePicture.src = "./images/avatars/image-maxblagun.png"

        const name = document.createElement("div")
        name.id = "name"
        name.textContent = newComment.getAuthor()

        const postingTime = document.createElement("div")
        postingTime.id = "postingTime"
        postingTime.textContent = newComment.getPostingTime()
        setInterval(() => {
            postingTime.textContent = newComment.getPostingTime();
        }, 1000);
         
        const check = document.createElement("img")
        check.id = "check"
        check.src = "./images/Icon-check.svg"

        const edit = document.createElement("img")
        edit.id = "edit"
        edit.src = "./images/icon-edit.svg"

        const delet = document.createElement("img")
        delet.id = "delet"
        delet.src = "./images/icon-delete.svg"
        delet.style.display = "none"

        const userName = document.createElement("span")
        userName.id = "userName"
        userName.textContent = newComment.getUserName()

        const divReply = document.createElement("div")
        divReply.id = "divReply"

        const textReply = document.createElement("div")
        textReply.textContent = "Reply"

        const reply = document.createElement("img")
        reply.id = "reply"
        reply.src = "./images/icon-reply.svg"

        const commentText = document.createElement("div")
        commentText.id = "commentText"

        const div = document.createElement("div")
        div.id = newComment.getId()

        // Montando o comnetário na tela amarando um elemento ao outro.
        profileAndPostingTime.appendChild(profilePicture)
        profileAndPostingTime.appendChild(name)
        profileAndPostingTime.appendChild(postingTime)
        profileAndPostingTime.appendChild(edit)
        profileAndPostingTime.appendChild(check)
        profileAndPostingTime.appendChild(delet)
        commentHeader.appendChild(profileAndPostingTime)
        divReply.appendChild(reply)
        divReply.appendChild(textReply) 
        commentHeader.appendChild(divReply)
        commentText.appendChild(userName)
        commentText.appendChild(document.createTextNode(" "))
        commentText.appendChild(document.createTextNode(textComment))
        li.appendChild(commentHeader)
        li.appendChild(commentText)
        comments.appendChild(li)
        comments.appendChild(div)

        addComment.value = ""

        // Criação dos eventos para editar e deletar o comentário, assim como responder algum comentário.
        edit.addEventListener("click", () =>{
            if(counter1 === 0){
                delet.style.display = "block"
                counter1 = 1
            }else{
                delet.style.display = "none"
                counter1 = 0
            }

            edit.style.display = "none"
            check.style.display = "block"

            addComment.value = commentText.lastChild.textContent
            addComment.focus()

            check.addEventListener("click", () =>{
                commentText.lastChild.textContent = addComment.value

                edit.style.display = "block"
                check.style.display = "none"
                delet.style.display = "none"

                addComment.value = ""
            })
        });

        delet.addEventListener("click", () =>{

            const popUp = document.createElement("div")
            popUp.id = "pop-up"
            const popUpTitle = document.createElement("h3")
            popUpTitle.id = "popUpTitle"
            popUpTitle.textContent = "Delete Comment"
            const textPopUp = document.createElement("div")
            textPopUp.id = "textPopUp"
            textPopUp.textContent = "Once the comment is deleted, the operation cannot be undone. Are you sure?"
            const buttonsPopUp = document.createElement("div")
            buttonsPopUp.id = "buttonsPopUp"
            const confirmDelet = document.createElement("button")
            confirmDelet.id = "confirmDelet"
            confirmDelet.textContent = "Confirm"
            const confirmCancel = document.createElement("button")
            confirmCancel.textContent = "Cancel"
            confirmCancel.id = "confirmCancel"
            const darkFun = document.createElement("div")
            darkFun.id = "darkFun"

            document.body.appendChild(darkFun)
            document.body.appendChild(popUp)
            popUp.appendChild(popUpTitle)
            popUp.appendChild(textPopUp)
            popUp.appendChild(buttonsPopUp)
            buttonsPopUp.appendChild(confirmDelet)
            buttonsPopUp.appendChild(confirmCancel)

            confirmDelet.addEventListener("click", () =>{
                li.remove()
                addComment.value = ""

                popUp.remove()
                darkFun.remove()
            })

            confirmCancel.addEventListener("click", () =>{
                popUp.remove()
            })
        })

        reply.addEventListener("click", () =>{
            addComment.focus()
            send.style.display = "none"
            newSend.style.display = "block"
            
            selectComment.forEach((id)=>{
                if(id === newComment.getId()){
                    newSend.addEventListener("click", () =>{

                        if(addComment.value){
                            console.log("funcionou")

                            const div = document.getElementById(id)

                            const line = document.createElement("div")
                            line.id = "line"
        
                            const replyComment = document.createElement("div")
                            replyComment.id = "replyComment"
        
                            const replycommentHeader = document.createElement("div")
                            replycommentHeader.id = "replycommentHeader"
        
                            const replyProfileAndResponsePostingTime = document.createElement("div")
                            replyProfileAndResponsePostingTime.id = "replyProfileAndResponsePostingTime"
        
                            const replyProfilePicture = document.createElement("img")
                            replyProfilePicture.id = "replyProfilePicture"
                            replyProfilePicture.src = "./images/avatars/image-juliusomo.png"
        
                            const replyName = document.createElement("div")
                            replyName.id = "replyName"
                            replyName.textContent = "Neto Maciel"
        
                            const replyPostingTime = document.createElement("div")
                            replyPostingTime.id = "replyPostingTime"
                            replyPostingTime.textContent = newComment.getPostingTime()
        
                            const replyEdit = document.createElement("img")
                            replyEdit.id = "replyEdit"
                            replyEdit.src = "./images/icon-edit.svg"
        
                            const replyCheck = document.createElement("img")
                            replyCheck.id = "replyCheck"
                            replyCheck.src = "./images/Icon-check.svg"
        
                            const replyDelet = document.createElement("img")
                            replyDelet.id = "replyDelet"
                            replyDelet.src = "./images/icon-delete.svg"
                            replyDelet.style.display = "none"
        
                            const replyCommentText = document.createElement("div")
                            replyCommentText.id = "replyCommentText"
                            const replyText = addComment.value
        
                            const replyUserName = document.createElement("span")
                            replyUserName.id = "replyUserName"
                            replyUserName.textContent = "@Netomaciel48"
                            let counter2 = 0
        
                            div.appendChild(line)
                            line.appendChild(replyComment)
                            replyComment.appendChild(replycommentHeader)
                            replyComment.appendChild(replyCommentText)
                            replycommentHeader.appendChild(replyProfileAndResponsePostingTime)
                            replyProfileAndResponsePostingTime.appendChild(replyProfilePicture)
                            replyProfileAndResponsePostingTime.appendChild(replyName)
                            replyProfileAndResponsePostingTime.appendChild(replyPostingTime)
                            replyProfileAndResponsePostingTime.appendChild(replyEdit)
                            replyProfileAndResponsePostingTime.appendChild(replyCheck)
                            replyProfileAndResponsePostingTime.appendChild(replyDelet)
                            replyCommentText.appendChild(replyUserName) 
                            replyCommentText.appendChild(document.createTextNode(" "))
                            replyCommentText.appendChild(document.createTextNode(replyText))
        
                            addComment.value = ""
                            send.style.display = "block"
                            newSend.style.display = "none"
                
                            replyEdit.addEventListener("click", () =>{
                                if(counter2 === 0){
                                    replyDelet.style.display = "block"
                                    counter2 = 1
                                }else{
                                    replyDelet.style.display = "none"
                                    counter2 = 0
                                }
                    
                                replyEdit.style.display = "none"
                                replyCheck.style.display = "block"
                    
                                addComment.value = commentText.lastChild.textContent
                                addComment.focus()
                    
                                replyCheck.addEventListener("click", () =>{
                                    replyCommentText.lastChild.textContent = addComment.value
                    
                                    replyEdit.style.display = "block"
                                    replyCheck.style.display = "none"
                                    replyDelet.style.display = "none"
                    
                                    addComment.value = ""
                                })
                            })
                
                            replyDelet.addEventListener("click", () =>{
                
                                const popUp = document.createElement("div")
                                popUp.id = "pop-up"
                                const popUpTitle = document.createElement("h3")
                                popUpTitle.id = "popUpTitle"
                                popUpTitle.textContent = "Delete Comment"
                                const textPopUp = document.createElement("div")
                                textPopUp.id = "textPopUp"
                                textPopUp.textContent = "Once the comment is deleted, the operation cannot be undone. Are you sure?"
                                const buttonsPopUp = document.createElement("div")
                                buttonsPopUp.id = "buttonsPopUp"
                                const confirmDelet = document.createElement("button")
                                confirmDelet.id = "confirmDelet"
                                confirmDelet.textContent = "Confirm"
                                const confirmCancel = document.createElement("button")
                                confirmCancel.textContent = "Cancel"
                                confirmCancel.id = "confirmCancel"
                                const darkFun = document.createElement("div")
                                darkFun.id = "darkFun"
                    
                                document.body.appendChild(darkFun)
                                document.body.appendChild(popUp)
                                popUp.appendChild(popUpTitle)
                                popUp.appendChild(textPopUp)
                                popUp.appendChild(buttonsPopUp)
                                buttonsPopUp.appendChild(confirmDelet)
                                buttonsPopUp.appendChild(confirmCancel)
                    
                                confirmDelet.addEventListener("click", () =>{
                                    line.remove()
                                    addComment.value = ""
                    
                                    popUp.remove()
                                    darkFun.remove()
                                })
                    
                                confirmCancel.addEventListener("click", () =>{
                                    popUp.remove()
                                })
        
                                send.style.display = "block"
                                newSend.style.display = "none"
                            })
                        }
                    })
                }
            })

        })

        textReply.addEventListener("click", () =>{
            const line = document.createElement("div")
            line.id = "line"
            const replyComment = document.createElement("div")
            replyComment.id = "replyComment"
            const replycommentHeader = document.createElement("div")
            replycommentHeader.id = "replycommentHeader"
            const replyProfileAndResponsePostingTime = document.createElement("div")
            replyProfileAndResponsePostingTime.id = "replyProfileAndResponsePostingTime"
            const replyProfilePicture = document.createElement("img")
            replyProfilePicture.id = "replyProfilePicture"
            replyProfilePicture.src = "./images/avatars/image-juliusomo.png"
            const replyName = document.createElement("div")
            replyName.id = "replyName"
            replyName.textContent = newComment.getUserName()
            const replyPostingTime = document.createElement("div")
            replyPostingTime.id = "replyPostingTime"
            replyPostingTime.textContent = newComment.getPostingTime()
            const replyEdit = document.createElement("img")
            replyEdit.id = "replyEdit"
            replyEdit.src = "./images/icon-edit.svg"
            const replyCheck = document.createElement("img")
            replyCheck.id = "replyCheck"
            replyCheck.src = "./images/Icon-check.svg"
            const replyDelet = document.createElement("img")
            replyDelet.id = "replyDelet"
            replyDelet.src = "./images/icon-delete.svg"
            replyDelet.style.display = "none"

            comments.appendChild(line)
            line.appendChild(replyComment)
            replyComment.appendChild(replycommentHeader)
            replyComment.appendChild(commentText)
            replycommentHeader.appendChild(replyProfileAndResponsePostingTime)
            replyProfileAndResponsePostingTime.appendChild(replyProfilePicture)
            replyProfileAndResponsePostingTime.appendChild(replyName)
            replyProfileAndResponsePostingTime.appendChild(replyPostingTime)
            replyProfileAndResponsePostingTime.appendChild(replyEdit)
            replyProfileAndResponsePostingTime.appendChild(replyCheck)
            replyProfileAndResponsePostingTime.appendChild(replyDelet)
        })

    }
}

// Chamando a função principal.
send.addEventListener("click", createComment)

// Chamando a função principal com a tecla Enter.
addComment.addEventListener("keyup", (event) =>{
    if (event.keyCode === 13) {
        event.preventDefault()
        createComment(event)
    }
});
