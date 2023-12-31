{/* <div id="parent">
  <div id="child">
      <h1>this is heading</h1>
  </div>
</div> */}

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
    React.createElement(
        "h1",{},"this is react heading",
    ),
    React.createElement(
        "h2",{},"this is react heading2",
    )]
),
React.createElement("div",{id:"child"},[
    React.createElement(
        "h1",{},"this is react heading",
    ),
    React.createElement(
        "h2",{},"this is react heading2",
    )]
)
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);