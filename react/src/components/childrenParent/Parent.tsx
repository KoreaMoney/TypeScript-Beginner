import React from "react";

/**
 * ReactNode의 타입은 다음과 같습니다.
 * type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
 * ReactNode 타입은 jsx 내에서 사용할 수 있는 모든 요소의 타입을 의미합니다.
 * ReactNode 타입은 클래스 컴포넌트 의 render 함수가 기본적으로 리턴하는 타입이기도 합니다.
 * 함수 컴포넌트는 ReactElement 인터페이스를 return합니다.
 */
const Parent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1>This is the parent</h1>
            {children}
        </div>
    );
};

export default Parent;
