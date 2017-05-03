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
    render: function(){
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" style={ InputStyle } placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" style={ InputStyle } placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="3" style={ InputStyle } className="form-control"></textarea>
                </div>
            </form>
        );
    }
});