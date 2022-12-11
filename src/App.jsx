import React from "react";
import Form from "./components/form/Form";
import Layout from "./components/layout/Layout";
import List from "./components/list/List";

const App = () => {
    return (
        <div>
            <Layout>
                <Form />
                <List />
            </Layout>
        </div>
    );
};

export default App;
