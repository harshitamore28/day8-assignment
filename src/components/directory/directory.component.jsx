/* 3
import React from 'react';
import './directory.component.scss'

const Directory =() =>{
    return (
        <div className="directory">
            <div>Veggies</div>
            <div>Fruits</div>
            <div>Dairy</div>
            <div>Miscellaneous</div>
        </div>
    );
}
export default Directory;
*/

/* 4
import React from 'react';
import './directory.component.scss'

class Directory extends React.Component {
    constructor(){
        super(); //links constructor to parent constructor

        this.state={
            {
                name:'harshita',
                list:[1,2,3]

            }
        
        }
    }
    render(){
        return(
            <div className="directory">
                <p>{this.state.name}</p>
                <p>{this.state.list}</p>
            </div>
        )
    }
}
export default Directory;
*/

/* 5
import React from 'react';
import './directory.component.scss'

class Directory extends React.Component {
    constructor(){
        super(); //links constructor to parent constructor

        this.state={
            sections: [
                {
                  title: "veggies",
                  imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                  id: 1,
                  linkUrl: "hats",
                },
                {
                  title: "fruits",
                  imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                  id: 2,
                  linkUrl: "",
                },
                {
                  title: "dairy",
                  imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                  id: 3,
                  linkUrl: "",
                },
                {
                  title: "condiments",
                  imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                  size: "large",
                  id: 4,
                  linkUrl: "",
                },
                {
                  title: "misc",
                  imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                  size: "large",
                  id: 5,
                  linkUrl: "",
                },
              ],
            };
          }
          render() {
            return (
              <div className="directory">
                { this.state.sections.map(({id, title}) => (
                  <>
                  <div>{id}</div>
                  <div>{title}</div>
                  </>
                ))}
              </div>
            );
          }
        }
export default Directory;
*/

/* 6
import React from "react";
import "./directory.component.scss";
import MenuItem from '../menu-item/menu-item.component.jsx'

class Directory extends React.Component {
  constructor() {
    super(); //it is used to call the constructor of the parent class

    this.state = {
      sections: [
        {
          title: "veggies",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "fruits",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "dairy",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "condiments",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "misc",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory">
        { this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}
export default Directory;
*/

/* 7
import React from "react";
import "./directory.component.scss";
import MenuItem from '../menu-item/menu-item.component.jsx'

class Directory extends React.Component {
  constructor() {
    super(); //it is used to call the constructor of the parent class

    this.state = {
      sections: [
        {
          title: "veggies",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "fruits",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "dairy",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "condiments",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "misc",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory">
        { this.state.sections.map(({title, ...otherSectionProps}) => (
          <MenuItem title={title} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}
export default Directory;
*/

/* 8
import React from "react";
import "./directory.component.scss";
import MenuItem from '../menu-item/menu-item.component.jsx'
import * as data from "../data/data.json"

class Directory extends React.Component {
  constructor() {
    super(); //it is used to call the constructor of the parent class

    this.state = {
      sections: data.sections
    }
  }
  render() {
    return (
      <div className="directory">
        { this.state.sections.map(({title, ...otherSectionProps}) => (
          <MenuItem title={title} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}
export default Directory;
*/

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
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
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