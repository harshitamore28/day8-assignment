/* 6
import React from 'react';
const MenuItem = ({title, imageurl, linkUrl, size}) => {

    return (
      <>
       
        <div>{title}</div>
        
      </>
    );

}
*/

/* 7
import React from 'react';
class MenuItem extends React.Component{

render(){
  return <div>{this.props.title}</div>;
}
}
export default MenuItem;
*/

/*8
import React from 'react';
class MenuItem extends React.Component{

render() {
  return (
    <>
      <div>{this.props.linkUrl}</div>
      <div>{this.props.title}</div>
      <div>{this.props.id}</div>
      
    </>
  );
}

}

//const MenuItem = props => <p>{props.title}</p>

export default MenuItem;
*/

/* 9

import React from 'react';
import './menu-item.component.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({title, imageUrl, history, match, size, location, linkUrl}) => {
    console.log(match);
    console.log(history);
    console.log(location);
  return(
     <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>

  )
 
}

export default withRouter(MenuItem); //wrapping a component in to HOC
*/

import React from 'react';
import './menu-item.component.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({id,title,price,description,category,image, rating, history, match}) => {
    // console.log(match);
    // console.log(history);
    // console.log(location);
  return(
    <tr className="content">        
      <td className="col-1">{id}</td>
      <td className="col-1"><img src={image} width="100px" alt="img"></img></td>
      <td className="col-1">{title.toUpperCase()}</td>
      <td className="col-1">{price}</td>
      <td className="col-1">{description}</td>
      <td className="col-1">{category}</td>
      <td className="col-1">{rating.rate}</td>
      <td className="col-1">{rating.count}</td>
      <td className="col-2"><button className="btn btn-primary" onClick={() => history.push(`${match.url}${title}`)}>Shop Now!</button></td>
    </tr>
  )
 
}

export default withRouter(MenuItem); //wrapping a component in to HOC