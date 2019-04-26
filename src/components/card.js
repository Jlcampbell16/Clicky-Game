import React from "react";
import "../App.css";
// const styles = {
//   .card: {
//     margin: 20,
//     height: 100,
//     width: 100,
//     objectFit: "cover"
//   }
// };

function Card(props) {
  return (
      <div className="card" >
        <div className="img-container">
          <img className="cardImg" alt={props.name} src={props.image} onClick={() => props.clickedCard(props.id)} />
        </div>
      </div>
  );
}

export default Card;
