var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { title: "React", linkUrl: "/09_Inline_Styles/index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    Title,
                    null,
                    "My component title!"
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Form, null),
                    React.createElement(
                        Button,
                        { textActive: "Loading..." },
                        "Send"
                    )
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById("page"));