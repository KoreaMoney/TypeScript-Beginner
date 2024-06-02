import React from "react";
import PostCard from "../postCard/PostCard";
import { IPostProps } from "@/types/types";

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const PostList = async () => {
    /**
     * data에서 title와 body만 사용하기 때문에 해당 type을 정의해줍니다. 데이터에는 배열의 값이 들어오기 때문에 type[]로 진행합니다.
     * 해당 data에 만약 type을 정의하지 않을 경우 data.map((post:{id:number; title:string; body:string}))
     * 직접 주거나  data.map((post:IPostProps))으로 주면 됩니다. 하지만 코드의 효율성과 유지 관리를 위해 data에 직접 줘서 하는 것을 추천합니다.
     */
    const data: IPostProps[] = await getData();
    return (
        <div className="postList">
            {data.map((post) => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
};

export default PostList;
