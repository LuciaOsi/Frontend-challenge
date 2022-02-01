/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = [
  { id: 12, mood: "Hungry", activity: "Eat" },
  { id: 13, mood: "Sad", activity: "Cry" },
  { id: 14, mood: "Cheerful", activity: "Dance" },
  { id: 15, mood: "Humorous", activity: "Laugh" },
  { id: 16, mood: "Angry", activity: "Shout" },
  { id: 17, mood: "Energetic", activity: "Code React" },
  { id: 18, mood: "Lazy", activity: "Watch Netflix" },
  { id: 19, mood: "Grumpy", activity: "Eat Chocolate" },
  { id: 20, mood: "Tired", activity: "Sleep" },
  { id: 21, mood: "Curious", activity: "Research" },
  /** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
];

export function ListItemsForNavigation() {
  const [selectedIndex, setSelectedIndex] = useState(12);
  const activeItemRef = useRef();
  // addEventListener this listener will catch the event of the movements of the arroy keys
  useEffect(function () {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  // Focus the current item
  // This effect will be re called when the selectedIndex changes or when the handleKeyDown is called
  useEffect(
    function () {
      if (document.getElementById(selectedIndex) != null) {
        document.getElementById(selectedIndex).focus();
      }
    },
    [
      selectedIndex,
      handleKeyDown
    ]
  );

  //The event key will show us which key was pressed
  //Navigate through the list with UP and RIGHT keys will focus the next item.
  // Navigate through the list with DOWN and LEFT keys will focus the previous item.
  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        event.target.focus();
        setSelectedIndex(Number(event.target.id) + 1);
        document.getElementById(selectedIndex);
        break;
      case "ArrowRight":
      case "ArrowUp":
        event.target.focus();
        setSelectedIndex(Number(event.target.id) - 1);
        document.getElementById(selectedIndex);
        break;
    }
  }

  return (
    <ul onKeyDown={handleKeyDown}>
      {itemsList.map((item) => (
        <li tabIndex={0} id={item.id}>
          {item.mood} - {item.activity}
        </li>
      ))}
    </ul>
  );
}
