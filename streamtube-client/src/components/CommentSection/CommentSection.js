import React from "react";
import "./CommentSection.scss"
import CommentAdd from "../CommentAdd/CommentAdd";
import CommentOld from "../Comments/Comments";

function Comments({ videoData, onAddComment }) {
    if (!videoData || !videoData.comments) {
        return null;
    }

    const { comments } = videoData;

    return (
        <section className='comments'>
            <div className='comments__eq'>

                <h4 className='comments__counter'>{`${comments.length} ${comments.length === 1 ? "Comment" : "Comments"
                    }`}</h4>



                {comments.map((comment) => (
                    <CommentOld key={comment.id} comments={comment} />
                ))}
            </div>
        </section>
    );
}

export default Comments;