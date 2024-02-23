import React from "react";
import "./Comments.scss"
import Empty from "../../assets/images/empty-image.png";

function Comments({ comments }) {
    const { id, name, timestamp, comment } = comments;

    const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <article className='comment'>
            <div key={id} className='comment__eq'>
                <img className='comment__img' src={Empty} alt="Commenter"></img>
                <div className="comment__text">
                    <div className="comment__text-top">
                        <h3 className="comment__text-top-name">{name}</h3>
                        <p className="comment__text-top-date">{formattedDate}</p>
                    </div>
                    <p className="comment__text-comment">{comment}</p>
                </div>
            </div>
        </article>
    );
}

export default Comments;