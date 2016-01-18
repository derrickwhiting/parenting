class Children extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let children = this.props.children.map( child => {
      return(<Child key={child.id} name={child.name} />); 
    });
    return(<div>
            <ul>
             {children}
             </ul>
           </div>)
  }
}