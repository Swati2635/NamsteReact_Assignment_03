import React from "react";
import  ReactDOM from "react-dom";

import Header from "./header";

const heading =React.createElement("h1", {id:"heading"}, "Hello world from React");

// Nested Elements

const parent= React.createElement("div", {id:'parent'},[
    React.createElement("div",{id:'children1'},
       [React.createElement("h1", {id:'head1'}, "Child1 heading"),
        React.createElement("h1", {id:'head2'}, "Child2 heading")]
        ),
    React.createElement("div",{id:'children2'},
       [React.createElement("h1", {id:'head1'}, "Child1 heading"),
       React.createElement("h1", {id:'head2'}, "Child2 heading")])
]
);

//React Element with single line jsx
const head=<h1 id="parent">Heading through React Jsx</h1>

//React Element with multi line jsx
const jsxHeadingWithMultiline =(<h1>Write multiline 
    heading in jsx ...</h1>)

//React Functional component
const Title =()=> <h1>Title Component</h1>;

//React Functional composition
const HeadingComponent= ()=>{
    return (
        <div>
            <Header/>
            {Title()}
            <Title/>
            <Title></Title>
            <h1>React Functional Component</h1>
            </div>
            )
}

const root =ReactDOM.createRoot(document.getElementById("root"));

//root.render(parent);

//root.render(head);

//root.render(jsxHeadingWithMultiline);

root.render(<HeadingComponent/>)
































