var Page = React.createClass({
    getInitialState: function(){
        return {
            data: [
                {id: 1, name:"Maria",email:"maria@mail.com",subject:"R",message:"My message test react"},
                {id: 2, name:"Pedro",email:"pedro@mail.com",subject:"A",message:"My message test angular"}
            ]
        };
    },

    handleContactSubmit: function(contact){
        console.log(contact);
        var newContacts = this.state.data.concat([contact]);
        this.setState({data: newContacts});
    },

    render: function(){
        return (
            <myElement>
                <Nav title="React" linkUrl="/09_Inline_Styles/index.html" />
                <div className="container">
                    <Title>
                        My component title!
                    </Title>
                    <div className="row">
                        <Form onContactSubmit={this.handleContactSubmit} idNumber={this.state.data.length + 1} />
                    </div>
                    <div className="row">
                        <List data={this.state.data}/>
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