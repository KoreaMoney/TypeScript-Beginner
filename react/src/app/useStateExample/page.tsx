"use client";
import React, { useState } from "react";

interface UserType {
    sessionId: number;
    name: string;
}

/**
 * useState에 들어가는 state값의 type을 정의해줍니다. 아래처럼 두가지를 볼 수 있습니다.
 * UserType이 될수도 있고 null일 수도 있는 것과 UserType으로만 구성한 후 초기 값에 null을 주지 않는 형식이 있습니다.
 * 이부분은 상황에 맞게 type을 정의하면 됩니다.
 */

const UseStateExample = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState<UserType | null>(null);
    // OR
    // const [user, setUser] = useState<UserType>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({
            name: username,
            sessionId: Math.random(),
        });
    };

    const handleClickLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser(null);
    };

    return (
        <div className="useStateExample">
            {user ? (
                <>
                    <b>{user.name} logged in Typescript </b>
                    <button onClick={handleClickLogout}>Logout</button>
                </>
            ) : (
                <form>
                    <input type="text" placeholder="Username" onChange={handleChange} />
                    <button onClick={handleClick}>Login</button>
                </form>
            )}
        </div>
    );
};

export default UseStateExample;
