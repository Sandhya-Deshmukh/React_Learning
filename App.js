// const heading =React.createElement("h1",{id:"heading"},"WELCOME TO React!!!");
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
     [React.createElement("h1", {}, "I am in parent heading 1"),
    React.createElement("h2", {}, "I am in parent heading 2"),]),

    React.createElement("div", { id: "child2" }, 
    [React.createElement("h1", {}, "I am in parent child2"),
    React.createElement("h2", {}, "I am in parent child2 header 2"),])
 ]);

 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);