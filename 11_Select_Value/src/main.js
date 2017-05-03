var Page = React.createClass({
    render: function(){
        return (
            <myElement>
                <Nav title="React" linkUrl="/12_list/index.html" />
                <div className="container">
                    <Title>
                        My component title!
                    </Title>
                    <div className="row">
                        <Form />
                        <Button textActive="Loading...">Send</Button>
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