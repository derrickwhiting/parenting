class Parent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(<div>
             <h2>These are all the children</h2>
             <Children />
           </div>)
  }
}