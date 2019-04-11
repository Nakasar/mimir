import React from "react";
import {Link, withRouter} from "react-router-dom";

function Navigation() {
  return (
    <>
      <h1>MIMIR</h1>

      <ul>
        <li><Link to="/">Portail</Link></li>
        <li><Link to="/players">Registre des Joueurs</Link></li>
        <li><Link to="/games">Explorateur de jeux</Link></li>
        <li><Link to="/sessions">Sessions de jeu</Link></li>
      </ul>

      <hr />
    </>
  )
}

export default withRouter(Navigation);
