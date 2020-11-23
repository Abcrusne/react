React.createClass = createReactClass;
var HelloComponent = React.createClass({  
    render: function() {
        return React.createElement("div",null,"Hello ",this.props.name    
            ); 
         }});

ReactDOM.render(React.createElement( 
              HelloComponent,  { name: "Jane" }),
              document.getElementById('root'));

              