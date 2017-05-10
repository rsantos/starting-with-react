var Nav = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href={ this.props.linkUrl } className="navbar-brand">
                            { this.props.title }
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});

var Title = React.createClass({
    render: function(){
        var TitleStyle = {
            color: "#777676",
            fontSize: "50px"
        };
        return (
            <div className="row">
                <h1 style={TitleStyle}>{ this.props.children }</h1>
            </div>
        );
    }
});

var Button = React.createClass({
    getInitialState: function(){
        return {
            click: false
        };
    },

    toggleClick: function(){
        this.setState({
            click: !this.state.click
        });
    },

    render: function(){
        var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        var title = this.state.click ? this.props.textActive : this.props.children;
        return (
            <button onClick={ this.toggleClick } className={ btnClass }>{ title }</button>
        );
    }
});

var Form = React.createClass({
    getInitialState: function(){
        return {
            name:'',
            email:'',
            subject:'R',
            message:''
        };
    },

    handleNameChange: function(e){
        this.setState({name: e.target.value});
    },

    handleEmailChange: function(e){
        this.setState({email: e.target.value});
    },

    handleSubjectChange: function(e){
        this.setState({subject: e.target.value});
    },

    handleMessageChange: function(e){
        this.setState({message: e.target.value});
    },

    handleSubmit: function(e){
        e.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var subject = this.state.subject;
        var message = this.state.message.trim();
        if(!name || !email || !subject || !message){
            return;
        }
        this.props.onContactSubmit({
            id: this.props.idNumber,
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    },

    render: function(){
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" style={ InputStyle } placeholder="Name" onChange={this.handleNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" style={ InputStyle } placeholder="Email" onChange={this.handleEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue={this.state.subject} name="subject" id="subject" className="form-control" onChange={this.handleSubjectChange}>
                        <option value="A">Angular</option>
                        <option value="J">Jquery</option>
                        <option value="R">React</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="3" style={ InputStyle } className="form-control" onChange={this.handleMessageChange}></textarea>
                </div>
                <Button textActive="Loading...">Send</Button>
            </form>
        );
    }
});

var Contact = React.createClass({
    render: function(){
        return (
            <tr>
                <th scope="row">{this.props.idNumber}</th>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.children}</td>
            </tr>
        );
    }
});

var List = React.createClass({
    render: function(){
        var contactNodes = this.props.data.map(function(contact){
            return (
                <Contact 
                    key={contact.id}
                    idNumber={contact.id}
                    name={contact.name}
                    email={contact.email}
                    subject={contact.subject}>
                    {contact.message}
                </Contact>
            );
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contactNodes}
                </tbody>
            </table>
        );
    }
});