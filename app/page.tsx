"use client";

import { useState } from "react";
import styles from "./page.module.css";

type Resource = {
  title: string;
  url: string;
};

type Day = {
  day: number;
  title: string;
  resources: Resource[];
};

type Week = {
  week: number;
  title: string;
  description: string;
  days: Day[];
};

const initialWeeks: Week[] = [
  {
    week: 1,
    title: "Product Management Fundamentals",
    description: "Build a strong foundation in product thinking and understand the role of a product manager.",
    days: [
      { day: 1, title: "Introduction to Product Management", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 2, title: "Understanding Users & Problems", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 3, title: "Problem Framing", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 4, title: "Product Thinking", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 5, title: "Putting the Fundamentals Together", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
    ],
  },
  {
    week: 2,
    title: "Building Products",
    description: "Learn how product teams move from a problem to a solution and make decisions along the way.",
    days: [
      { day: 1, title: "User Research", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 2, title: "Ideation & Solutions", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 3, title: "Prioritisation", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 4, title: "Product Strategy", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 5, title: "Metrics & Measuring Success", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
    ],
  },
  {
    week: 3,
    title: "Case Preparation",
    description: "Bring the concepts together and practise approaching product problems in a structured way.",
    days: [
      { day: 1, title: "Product Case Basics", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 2, title: "Breaking Down a Case", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 3, title: "Making Trade-offs", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 4, title: "Communicating Your Solution", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
      { day: 5, title: "Final Preparation", resources: [{ title: "Resource 01", url: "#" }, { title: "Resource 02", url: "#" }, { title: "Resource 03", url: "#" }] },
    ],
  },
];

export default function ProductManagementPage() {
  const [weeks, setWeeks] = useState(initialWeeks);

  function addResource(weekIndex: number, dayIndex: number) {
    setWeeks((current) =>
      current.map((week, wi) =>
        wi !== weekIndex
          ? week
          : {
              ...week,
              days: week.days.map((day, di) =>
                di !== dayIndex
                  ? day
                  : {
                      ...day,
                      resources: [
                        ...day.resources,
                        {
                          title: `Resource ${String(day.resources.length + 1).padStart(2, "0")}`,
                          url: "#",
                        },
                      ],
                    }
              ),
            }
      )
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#" className={styles.brand}>
            <span className={styles.logoPlaceholder}>CELESTA</span>
            <span>CELESTA</span>
          </a>

          <nav className={styles.nav}>
            <a href="#learning">Learning</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={`${styles.eyebrow} race`}>PRODUCT MANAGEMENT WING · FINANCE CLUB · IIT PATNA</p>
          <h1 className={`${styles.title} stateWide`}>
            Product Management
            <br />
            <span>Learning Journey</span>
          </h1>
          <p className={styles.intro}>
            A guided collection of resources to help you build your understanding
            of product management and prepare for the journey ahead.
          </p>
        </div>
      </section>

      <section id="learning" className={styles.learning}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={`${styles.eyebrow} race`}>LEARNING PLAN</p>
              <h2 className={`${styles.sectionTitle} stateWide`}>Start Learning</h2>
            </div>
            <p className={styles.sectionDescription}>
              Work through each day in order. Open the resources, take notes,
              and come back whenever you need to revise.
            </p>
          </div>

          <div className={styles.weeks}>
            {weeks.map((week, weekIndex) => (
              <section className={styles.week} key={week.week}>
                <div className={styles.weekHeader}>
                  <div className={styles.weekNumber}>WEEK {String(week.week).padStart(2, "0")}</div>
                  <div>
                    <h3 className={`${styles.weekTitle} stateWide`}>{week.title}</h3>
                    <p className={styles.weekDescription}>{week.description}</p>
                  </div>
                </div>

                <div className={styles.days}>
                  {week.days.map((day, dayIndex) => (
                    <article className={styles.day} key={day.day}>
                      <div className={styles.dayHeader}>
                        <span className={`${styles.dayNumber} race`}>
                          DAY {String(day.day).padStart(2, "0")}
                        </span>
                        <h4>{day.title}</h4>
                      </div>

                      <div className={styles.resources}>
                        {day.resources.map((resource, resourceIndex) => (
                          <a
                            className={styles.resource}
                            href={resource.url}
                            key={`${resource.title}-${resourceIndex}`}
                            target={resource.url !== "#" ? "_blank" : undefined}
                            rel={resource.url !== "#" ? "noreferrer" : undefined}
                          >
                            <span>{resource.title}</span>
                            <span className={styles.arrow}>↗</span>
                          </a>
                        ))}

                        <button
                          className={styles.addResource}
                          type="button"
                          onClick={() => addResource(weekIndex, dayIndex)}
                        >
                          + Add another resource
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutBox}>
            <div>
              <p className={`${styles.eyebrow} race`}>ABOUT</p>
              <h2 className={`${styles.aboutTitle} stateWide`}>
                Learn. Apply.
                <br />
                Build.
              </h2>
            </div>
            <p className={styles.aboutText}>
              This learning hub is maintained by the Product Management Wing of
              Finance Club, IIT Patna. Resources can be updated as the programme
              progresses.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <span>CELESTA · IIT PATNA</span>
          <span>FINANCE CLUB · PRODUCT MANAGEMENT WING</span>
        </div>
      </footer>
    </main>
  );
}
