"use client";

import React from "react";

/**
React에서는 onClick, onChange와 같은 여러 이벤트 핸들러를 사용할 수 있습니다. 
onClick 이벤트의 경우, HTML에서 Button 태그 요소를 사용하므로 HTMLButtonElement 타입이 필요하며, 
마우스로 이벤트가 발생할 경우 React.MouseEvent 타입을 사용합니다. 
따라서 onClick 이벤트의 타입은 React.MouseEvent<HTMLButtonElement>가 됩니다.
반면, onChange 이벤트는 HTML Input 태그 요소를 사용하므로 HTMLInputElement 타입이 필요하며, 
입력 이벤트가 발생할 경우 React.ChangeEvent 타입을 사용합니다. 
따라서 onChange 이벤트의 타입은 React.ChangeEvent<HTMLInputElement>가 됩니다.
또한, 삭제 또는 선택과 같이 특정 액션을 구분해야 할 경우, 이벤트와 함께 ID를 전달할 수 있습니다.
 이때 해당 ID의 타입도 정의해 주어야 합니다.
 */

const EventExample = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Searched!");
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        console.log(`Post ${id} has been deleted!`);
    };

    return (
        <div className="eventExample">
            <form>
                <input type="text" placeholder="Search for anything..." onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
            </form>
            <form className="post">
                <h1>{"타입스크립트의 이벤트 항목(1)"}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam voluptate quisquam voluptatibus
                    magni voluptatum quasi eveniet totam harum neque itaque, eum reprehenderit non repellendus?
                    Assumenda necessitatibus distinctio veniam eveniet.
                </p>
                <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
            </form>
            <form className="post">
                <h1>{"타입스크립트의 이벤트 항목(2)"}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam voluptate quisquam voluptatibus
                    magni voluptatum quasi eveniet totam harum neque itaque, eum reprehenderit non repellendus?
                    Assumenda necessitatibus distinctio veniam eveniet.
                </p>
                <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
            </form>
            <b>
                실제로 삭제와 검색이 되는 것은 안됩니다. 기능적인 내용보다 typescript의 event에 대한 학습을 진행하세요.
            </b>
            <p> console.log를 확인하고 깃헙의 코드를 확인해주세요.</p>
        </div>
    );
};

export default EventExample;
