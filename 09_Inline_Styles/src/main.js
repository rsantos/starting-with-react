var Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <Nav title="React" linkUrl="/09_Inline_Styles/index.html" />
                <div className="container">
                    <Title title="My component title!" />
                    <div className="row">
                        <Form />
                        <Button title="Send" textActive="Loading..."/>
                    </div>
                </div>
            </myElement>
        );
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById("page")
);