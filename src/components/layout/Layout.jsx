import React from "react";
import styled from "styled-components"; // styled-components 임포트

const Layout = (props) => {
    //styled-comprnents 적용
    return <StBox>{props.children}</StBox>;
};

//styled-components 생성
const StBox = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
`;

export default Layout;
