import React, { useState } from "react";
import axios from "axios";
import "./CommentAdd.scss"
import SpeechBubble from "../../assets/images/icons/add_comment.svg";

const apiKey = "c8f93081-09f2-4de0-baa5-ffe6fbc33fcf"

function CommentAdd({ onAddComment, videoId }) {
    const [commentText, setCommentText] = useState("");


    const handleCommentChange = (event) => {
        setCommentText(event.target.value);

    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`https://project-2-api.herokuapp.com/videos/${videoId}/comments`, {
                name: "Nigel",
                comment: commentText,
            },
            {   params: {
                api_key: apiKey,
                },
            });

            const newComment = response.data;
            onAddComment(newComment);
            setCommentText(""); // clear
        } catch (error) {
        }
    };

    return (
        <article className=""
        >
            <div className="comments-add__all">
                <img className="comments-add__img" src="" alt="User Display" />
                <div className="comments-add__text">
                    <h3 className="comments-add__text-title">JOIN THE CONVERSATION</h3>
                    <form className="comments-add__text-form" onSubmit={handleCommentSubmit}>
                        <textarea
                            className={`comments-add__text-box ${hasError ? "has-error" : ""}`}
                            type="text"
                            placeholder="Add a new comment"
                            value={commentText}
                            onChange={handleCommentChange}
                        ></textarea>
                        <button className="comments-add__text-button" type="submit">
                            <div className="comments-add__text-button-eq">
                                <img className="comments-add__text-button-icon" src={SpeechBubble} alt="Add a Comment" />
                                COMMENT
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </article>
    );
}

export default CommentAdd;