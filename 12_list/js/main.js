var data = [{ id: 1, name: "Maria", email: "maria@mail.com", subject: "R", message: "My message test react" }, { id: 2, name: "Pedro", email: "pedro@mail.com", subject: "A", message: "My message test angular" }];

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
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(List, { data: data })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById("page"));