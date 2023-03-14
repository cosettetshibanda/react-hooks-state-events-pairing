import React, {useState} from "react"

function Details(props){
   const [upVotes, setUpVotes] = useState(props.upVotes)
   const [downVotes, setDownVotes] = useState(props.downVotes)

   function handleClick(event){
    switch (event.target.id){
        case "upvote-button":
            setUpVotes(upVotes + 1)
            break
        case "downvote-button":
            setDownVotes(downVotes + 1)
            break
        case "hide-button":
            let commentsContainer = document.getElementById("comments-container")
            commentsContainer.classList.toggle("hidden")
            console.log(commentsContainer)
            if (event.target.innerText === "Hide Comments"){
                event.target.innerText = "Show Comments"
            } 
            else (event.target.innerText = "Hide Comments")
            break
    }
   }
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.viewCount} Views | Uploaded {props.createdAt}</p>
            <button onClick={handleClick} id="upvote-button">{upVotes}👍</button>
            <button onClick={handleClick} id="downvote-button">{downVotes}👎</button>
            <br></br>
            <br></br>
            <button onClick={handleClick} id="hide-button">Hide Comments</button>
        </div>
    )
}

export default Details