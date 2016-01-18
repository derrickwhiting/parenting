class Child extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(<li className='flat hoverable lowercase'><h5>{this.props.name}</h5></li>
                  )
  }
}