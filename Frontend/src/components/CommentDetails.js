import React from 'react';
import companyLogo from './profile.jpg';
import "../Styles/comment.css";

function CommentDetails(props) {
    // {userId, comments} 
    const comment = props.comment;
    const userId = "Riya_rana";
    
    return (
        <div style={{marginTop:"5px"}}>
            <img src={companyLogo} alt='userImg' className='Username' />
            <span style={{marginLeft:"5px"}}>{userId}</span>
            <p style={{marginLeft:"15%",border:"1px black"}}>:/😉{comment}</p>
            <hr style={{width:"70%", marginLeft:"50%"}}/>
        </div>
    );
}

export default CommentDetails;