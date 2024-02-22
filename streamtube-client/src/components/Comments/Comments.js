import React from "react";
import "./CommentOld.scss"
import Empty from "../../assets/images/empty-image.png";

function CommentOld({ comments }) {
    const { id, name, timestamp, comment } = comments;

    const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <article className='comments-old'>
            <div key={id} className='comments-old__eq'>
                <img className='comments-old__img' src={Empty} alt="Commenter"></img>
                <div className="comments-old__text">
                    <div className="comments-old__text-top">
                        <h3 className="comments-old__text-top-name">{name}</h3>
                        <p className="comments-old__text-top-date">{formattedDate}</p>
                    </div>
                    <p className="comments-old__text-comment">{comment}</p>
                </div>
            </div>
        </article>
    );
}

export default CommentOld;