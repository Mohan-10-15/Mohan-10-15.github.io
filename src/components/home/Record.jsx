import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Reveal from "../common/Reveal.jsx";
import { blogData } from "../../data/blogData.js";
import { eventsData } from "../../data/eventsData.js";

const categories = [
  {
    id: "writing",
    menuLabel: "WRITING",
    label: "Technical Journal"
  },
  {
    id: "events",
    menuLabel: "EVENTS",
    label: "Live Record"
  }
];

function buildStories() {
  const stories = [];

  blogData.forEach((article) => {
    stories.push({
      key: `writing-${article.slug}`,
      category: "WRITING · TECHNICAL JOURNAL",
      date: article.date,
      titleStart: article.title.split(":")[0],
      titleAccent: article.title.split(":")[1] ?? "",
      description: article.excerpt,
      tags: article.tags.slice(0, 3),
      href: `/blog/${article.slug}`
    });
  });

  eventsData.forEach((event, index) => {
    stories.push({
      key: `events-${event.slug}`,
      category: `EVENT · ${event.type.toUpperCase()}`,
      date: event.date,
      titleStart: event.title,
      titleAccent: event.mode,
      description: event.description,
      tags: event.skills.slice(0, 3),
      href: `/events/${event.slug}`,
      index: String(index + 1).padStart(2, "0")
    });
  });

  return stories;
}

function Record() {
  const stories = buildStories();
  const [activeCategory, setActiveCategory] = useState("writing");
  const [itemIndex, setItemIndex] = useState(0);

  const visibleStories = stories.filter((story) =>
    story.key.startsWith(`${activeCategory}-`)
  );

  const activeStory = visibleStories[itemIndex] ?? visibleStories[0];

  const storyNumber = String(
    visibleStories.findIndex((item) => item.key === activeStory?.key) + 1
  ).padStart(2, "0");

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setItemIndex(0);
  };

  const availIndex =
    visibleStories.findIndex((item) => item.key === activeStory?.key) ?? 0;
  const atStart = availIndex <= 0;
  const atEnd = availIndex >= visibleStories.length - 1;

  return (
    <section id="record" className="record">
      <div className="site-container">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span>
              07 <span>/</span> OPEN RECORD
            </span>
          </span>

          <h2>
            Open <em>record</em>
          </h2>

          <p className="section-head__note">
            Stories from technical writing, events and hands-on
            cybersecurity learning.
          </p>
        </Reveal>

        <div className="record__layout">
          <Reveal as="div" className="record__menu" role="tablist">
            <p className="journey__section-label">Categories</p>

            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                className={`record__menu-button ${
                  activeCategory === category.id
                    ? "is-active"
                    : ""
                }`}
                onClick={() => selectCategory(category.id)}
              >
                {category.menuLabel}
              </button>
            ))}

            <p
              className="journey__section-label"
              style={{ marginTop: "34px" }}
            >
              Navigate
            </p>

            <div className="record__pager">
              <button
                type="button"
                onClick={() =>
                  setItemIndex((current) =>
                    Math.max(0, current - 1)
                  )
                }
                disabled={atStart}
                aria-label="Previous story"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() =>
                  setItemIndex((current) =>
                    Math.min(visibleStories.length - 1, current + 1)
                  )
                }
                disabled={atEnd}
                aria-label="Next story"
              >
                →
              </button>
            </div>
          </Reveal>

          {activeStory && (
            <Reveal
              as="article"
              key={activeStory.key}
              className="record__story"
            >
              <span className="record__number">
                {activeStory.index ?? storyNumber}
              </span>

              <p className="record__category">
                {activeStory.category} · {activeStory.date}
              </p>

              <h3 className="record__roll-in">
                {activeStory.titleStart}
                {activeStory.titleAccent && (
                  <>
                    <br />
                    <em>{activeStory.titleAccent}</em>
                  </>
                )}
              </h3>

              <p className="record__description">
                {activeStory.description}
              </p>

              <footer className="record__story-footer">
                <div className="record__tags">
                  {activeStory.tags.map((tag) => (
                    <span className="tag" key={`${activeStory.key}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {activeStory.href ? (
                  <Link className="text-link" to={activeStory.href}>
                    OPEN
                    <ArrowUpRight size={15} />
                  </Link>
                ) : (
                  <span className="tag">OPEN</span>
                )}
              </footer>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

export default Record;