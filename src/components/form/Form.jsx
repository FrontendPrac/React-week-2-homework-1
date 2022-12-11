import React, { useState } from "react";
import styled from "styled-components"; // styled-components 임포트
import { useSelector, useDispatch } from "react-redux"; // useSelector, useDispatch 임포트
import { addTodo } from "../../redux/modules/todos"; // action creator 임포트

const Form = () => {
    // store에 있는 모든 state 가져오기
    const todos = useSelector((state) => state.todos.todos);
    // console.log(todos);

    // dispatch 사용 준비
    const dispatch = useDispatch();

    // 지역 state 생성
    const [text, setText] = useState("");
    const onChangeHandler = (event) => {
        const newValue = event.target.value;
        setText(newValue);
        // console.log(text);
    };

    // dispatch로 action 객체 전달
    const onSubmitHandler = (event) => {
        if (document.querySelector(".input").value === "") {
            event.preventDefault();
        } else {
            event.preventDefault();
            dispatch(addTodo({ id: todos.length + 1, content: text }));
            document.querySelector(".input").value = "";
            // console.log(todos);
        }
    };

    // const onSubmitHandler = (event) => {
    //     if (document.querySelector(".input").value === "") {
    //         event.preventDefault();
    //     } else {
    //         event.preventDefault();
    //         const newTodo = {
    //             id: todos.length + 1,
    //             content: text,
    //         };
    //         setTodos([...todos, newTodo]);
    //         document.querySelector(".input").value = "";
    //         // console.log(todos);
    //     }
    // };

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     dispatch({ type: "PLUS_ONE" });
    //     // console.log(id);
    // };

    return (
        //styled-comprnents 적용
        <StHeader>
            <h2>Todos의 제목을 입력하세요</h2>
            <form>
                <input
                    className="input"
                    type="text"
                    onChange={onChangeHandler}
                />
                <StButton onClick={onSubmitHandler}>추가하기</StButton>
            </form>
        </StHeader>
    );
};

//styled-components 생성
const StHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const StButton = styled.button`
    border: transparent solid;
    border-radius: 10px;
    height: 30px;
    margin-left: 10px;
`;

export default Form;
