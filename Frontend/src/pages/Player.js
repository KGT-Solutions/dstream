import { useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken , faComment} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import '../Styles/Like.css';
import CommentDetails from "../components/CommentDetails";




const Player = ({ player, title , Comments, setComments}) => {

  const [likes, setLikes] = useState(100);
  const [isLiked, setIsLiked] =useState(false)
  
  const [Comment, setComment] = useState([])
  const [showComments, setShowComments] = useState(false)

  const handleLikes = () => {
    setLikes(likes + (isLiked?-1:1));
    setIsLiked(!isLiked);
  };

  const handleComments = () => {
      setShowComments(!showComments)
  };
  const handleChange = (e) => {
      setComment(e.target.value);
  }
  const saveComment = (e) => {
    e.preventDefault();
    if(Comment.length===0){
      return;
    }
    setComments(prev => [...prev,Comment])
    console.log(Comments);
  }



  return (
    <>
      <div className="player">
        <h1 id="title">{title}</h1>
        <ReactPlayer
          height="70%"
          width="80%"
          className="video"
          url={player}
          controls
        />
        <div style={ {justifyContent: "flex-end", marginTop: "13px", marginRight : "65%"}}>
          <span onClick={handleLikes}  className={"like-button " + (isLiked ? "Liked" : "")} style = {{marginRight: "15px"}}>
           {isLiked === false ? (
              <FontAwesomeIcon icon={faHeartBroken} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
            <span> {likes > 0 && `${likes}`} </span>
          </span>


          <span onClick={handleComments} className= {"like-button"}><FontAwesomeIcon icon={faComment} /></span>
          {
            showComments &&
            <form onSubmit={saveComment} style={{marginLeft: "40%", marginTop: "25px", marginRight:"7px"}}>
              <textarea name="postContent" rows={3} cols={30} onChange={(e) => handleChange(e)} placeholder="Add a comment ..." id="commentText"/>
              <button type="Submit" className="postComm">Post</button>
            </form> 
          }

          {
            showComments && Comments?.map((comment,i) => <CommentDetails  comment={comment} key={(i)=> i+1}/>)   // pass {username, comment}
          }
        </div>
      </div>
    </>
  );
};

export default Player;
