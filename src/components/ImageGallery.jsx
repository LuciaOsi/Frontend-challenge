/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */
import { useState } from "react";

function Image({ src, linkKey, onRemove }) {
  return (
    <div class="image" >
      <img key={linkKey} src={src} alt="#"/>
      <button key={linkKey} onClick={() => onRemove(linkKey)}>X</button>
    </div>
  );
}

export function ImageGallery({ links }) {
  const [imageLinks, setLinks] = useState(links);
  //Removes the scr that corresponds to the key parameter
  //The image key corresponds to the button that was click to remove the image
  const onRemove = (key) => {
    const newLinks = [...imageLinks].filter((link) => link.key !== key);
    setLinks(newLinks);
  };
  return (
    <div className="imageGallery">
      {imageLinks.map((link) => (
        <Image src={link.src} linkKey={link.key} onRemove={onRemove}></Image>
      ))}
    </div>
  );
}
