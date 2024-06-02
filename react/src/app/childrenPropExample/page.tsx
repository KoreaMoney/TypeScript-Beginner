import Child from "@/components/childrenParent/Child";
import Parent from "@/components/childrenParent/Parent";
import SecondChild from "@/components/childrenParent/SecondChild";
import React from "react";

/**
 * parent안에 들어가는 children같은 경우 parent에서 React.ReactNode로 type을 정의했기 때문에
 * 문제없이 props로 child가 들어가는 것을 확인 할 수 있습니다.
 */
const ChildrenPropExample = () => {
    return (
        <div>
            <Parent>
                <Child />
                <SecondChild />
            </Parent>
        </div>
    );
};

export default ChildrenPropExample;
