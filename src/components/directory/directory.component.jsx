import React from "react";
import "./directory.component.scss";
import MenuItem from '../menu-item/menu-item.component.jsx'

const url = "https://fakestoreapi.com/products"

class Directory extends React.Component {
  constructor() {
    super(); //it is used to call the constructor of the parent class

    this.state = {
      sections: []
    };
  }

  componentDidMount(){
    this.updateState();
  }

  updateState(){
    fetch(url,{
      Method:'GET'
    })
    .then(res=>res.json())
    .then(res=>this.setState({sections:res}))
  }

  render() {
    return (
      <div className="directory">
        <table border ="1" className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Image</td>
              <td>Title</td>
              <td>Price</td>
              <td>Description</td>
              <td>Category</td>
              <td>Rate</td>
              <td>Count</td>
              <td>Buy</td>
            </tr>
          </thead>
          <tbody>
            { this.state.sections.map(({id,title, ...sectionProps}) => (
              <MenuItem key={id} id={id} title={title} {...sectionProps}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Directory;
