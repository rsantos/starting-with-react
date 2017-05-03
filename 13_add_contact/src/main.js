var data = [
    {id: 1, name:"Maria",email:"maria@mail.com",subject:"R",message:"My message test react"},
    {id: 2, name:"Pedro",email:"pedro@mail.com",subject:"A",message:"My message test angular"}
];

var Page = React.createClass({
    getInitialState: function(){
        return {
            data: [
                {id: 1, name:"Maria",email:"maria@mail.com",subject:"R",message:"My message test react"},
                {id: 2, name:"Pedro",email:"pedro@mail.com",subject:"A",message:"My message test angular"}
            ]
        };
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
                        <Form />
                        <Button textActive="Loading...">Send</Button>
                    </div>
                    <div className="row">
                        <List data={data}/>
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