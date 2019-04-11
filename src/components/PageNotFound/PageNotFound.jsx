import React from "react";
import {withRouter} from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Oups :'(</h2>

      <p>Vous êtes allé trop profondément dans les Abysses, et au lieu de trouver une page inexistance, vous êtes tombé nez à nez avec un Grand Ancien...</p>
    </>
  )
}

export default withRouter(Home);
