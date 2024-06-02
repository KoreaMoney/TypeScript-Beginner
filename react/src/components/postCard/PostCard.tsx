import { IPostProps } from "@/types/types";
import React from "react";

const PostCard = ({ title, body }: IPostProps) => {
    return (
        <div className="postCard">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostCard;
