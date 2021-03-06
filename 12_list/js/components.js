var Nav = React.createClass({
    displayName: "Nav",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar-default" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { href: this.props.linkUrl, className: "navbar-brand" },
                        this.props.title
                    )
                )
            )
        );
    }
});

var Title = React.createClass({
    displayName: "Title",

    render: function () {
        var TitleStyle = {
            color: "#777676",
            fontSize: "50px"
        };
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "h1",
                { style: TitleStyle },
                this.props.children
            )
        );
    }
});

var Button = React.createClass({
    displayName: "Button",

    getInitialState: function () {
        return {
            click: false
        };
    },

    toggleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },

    render: function () {
        var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        var title = this.state.click ? this.props.textActive : this.props.children;
        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            title
        );
    }
});

var Form = React.createClass({
    displayName: "Form",

    render: function () {
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return React.createElement(
            "form",
            null,
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    "Name"
                ),
                React.createElement("input", { type: "text", className: "form-control", id: "name", name: "name", style: InputStyle, placeholder: "Name" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "Email"
                ),
                React.createElement("input", { type: "email", className: "form-control", id: "email", name: "email", style: InputStyle, placeholder: "Email" })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "subject" },
                    "Subject"
                ),
                React.createElement(
                    "select",
                    { defaultValue: "R", name: "subject", id: "subject", className: "form-control" },
                    React.createElement(
                        "option",
                        { value: "A" },
                        "Angular"
                    ),
                    React.createElement(
                        "option",
                        { value: "J" },
                        "Jquery"
                    ),
                    React.createElement(
                        "option",
                        { value: "R" },
                        "React"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "message" },
                    "Message"
                ),
                React.createElement("textarea", { name: "message", id: "message", rows: "3", style: InputStyle, className: "form-control" })
            )
        );
    }
});

var Contact = React.createClass({
    displayName: "Contact",

    render: function () {
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                { scope: "row" },
                this.props.idNumber
            ),
            React.createElement(
                "td",
                null,
                this.props.name
            ),
            React.createElement(
                "td",
                null,
                this.props.email
            ),
            React.createElement(
                "td",
                null,
                this.props.subject
            ),
            React.createElement(
                "td",
                null,
                this.props.children
            )
        );
    }
});

var List = React.createClass({
    displayName: "List",

    render: function () {
        var contactNodes = this.props.data.map(function (contact) {
            return React.createElement(
                Contact,
                {
                    key: contact.id,
                    idNumber: contact.id,
                    name: contact.name,
                    email: contact.email,
                    subject: contact.subject },
                contact.message
            );
        });
        return React.createElement(
            "table",
            { className: "table" },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Email"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Subject"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Message"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                contactNodes
            )
        );
    }
});