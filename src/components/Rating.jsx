/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react";
import "../style/Rating.css";
function Star(props) {
  const { starId, active, changeStatus } = props;
  const className = active ? "active" : "";
  return (
      <span
        id={starId}
        className={className + " mx-2"}
        onClick={() => changeStatus(starId)}
      >
        *
      </span>
  );
}

export function Rating() {
  const ratings = [
    { id: "1S", active: false },
    { id: "2S", active: false },
    { id: "3S", active: false },
    { id: "4S", active: false },
    { id: "5S", active: false },
  ];
  const [stars, setStars] = useState(ratings);

  //Parameter key: the key that corresponds to the clicked star
  //The function change Status sets the active prop in true till the id matches the given key
  //All of the remaining starts are set to false
  const changeStatus = (key) => {
    let founded = false;
    const updatedStars = [...stars];
    updatedStars.forEach((star) => {
      star.active = false;
      if (!founded) {
        star.active = true;
        if (star.id == key) founded = true;
      }
    });
    setStars(updatedStars);
  };
  return (
    <div class="rating">
      {stars.map((star) => (
        <Star
          starId={star.id}
          active={star.active}
          changeStatus={changeStatus}
        ></Star>
      ))}
    </div>
  );
}
