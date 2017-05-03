var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { title: "React", linkUrl: "/07_Organizing_code/index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(Title, { title: "My component title!" }),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Button, { title: "My Button test", textActive: "Loading..." })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById("page"));