import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "My First React Heading");
const jsxHeading=<h1 id="heading">Welcome To JSX in Raect</h1>
const Title=()=>(
    <h1>Inside Heading Compnent</h1>
);
//Component Compsition
const HeadingComponent=()=>(
    <div id="component">
       
        <h1 className="heading">I Am in React Function Compnent</h1>
        <Title/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);