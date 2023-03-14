import Comment from "./Comment"

function Comments(props){
    function renderComments(){
        return props.comments.map((comment, index) => {
            return (
                <Comment key={index} comment={comment}></Comment>
            )
        })
    }
    return(
        <div id="comments-container">
            <hr></hr>
            <h2>{props.comments.length} Comments</h2>
            {renderComments()}
        </div>
    )
}

export default Comments