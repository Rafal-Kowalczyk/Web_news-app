import React from "react";
import { useGlobalContext } from "../../context/context";

import "../../styles/storiesContent.scss";

function StoriesContent() {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories ">
      {hits.map((story) => {
        const { objectID, title, points, author, num_comments, url } = story;
        return (
          <article key={objectID} className="stories__story">
            <h3 className="stories__title">{title}</h3>
            <p className="stories__info">
              {points} points by {author} | {num_comments} comments
            </p>
            <div className="stories__buttons">
              <a
                href={url}
                target="_blank"
                className="stories__read"
                rel="noopener noreferrer"
              >
                Read more
              </a>
              <button
                className="stories__remove"
                onClick={() => removeStory(objectID)}
              >
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default StoriesContent;
