import React from "react";
import "./CommentSection.scss"


function Comments() {


    return (
        <section className='comments'>
            <div className='comments__eq'>

                <h4 className='comments__counter'>{`${comments.length} ${comments.length === 1 ? "Comment" : "Comments"
                    }`}</h4>


            </div>
        </section>
    );
}

export default Comments;