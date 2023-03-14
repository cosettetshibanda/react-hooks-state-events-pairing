import Comments from "./Comments"
import Details from "./Details"

function Video(props){
    return(
        <div>
            <iframe
            width="919"
            height="525"
            src={props.videoData.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
          <Details 
            title={props.videoData.title}
            viewCount={props.videoData.views}
            createdAt={props.videoData.createdAt}
            upVotes={props.videoData.upvotes}
            downVotes={props.videoData.downvotes}
            ></Details>
          <Comments
            comments={props.videoData.comments}
          ></Comments>
        </div>
    )
}

export default Video