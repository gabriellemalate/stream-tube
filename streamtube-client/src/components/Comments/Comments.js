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
        <article className='comments'>
            <div key={id} className='comments__eq'>
                <img className='comments__img' src={Empty} alt="Commenter"></img>
                <div className="comments__text">
                    <div className="comments__text-top">
                        <h3 className="comments__text-top-name">{name}</h3>
                        <p className="comments__text-top-date">{formattedDate}</p>
                    </div>
                    <p className="comments__text-comment">{comment}</p>
                </div>
            </div>
        </article>
    );
}

export default Comments;