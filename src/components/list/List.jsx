import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"; // styled-components 임포트

const List = () => {
    // store에 있는 모든 state 가져오기
    const todos = useSelector((state) => state.todos.todos);
    // console.log(todos);

    return (
        //styled-comprnents 적용
        <StList key={todos.id}>
            {todos.map((todo) => {
                return (
                    <StBox key={todo.id} className="box">
                        <h3>{todo.content}</h3>
                    </StBox>
                );
            })}
        </StList>
    );
};

//styled-components 생성
const StList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

const StBox = styled.div`
    width: 200px;
    height: 50px;
    padding: 20px;
    border: gray solid 3px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export default List;
