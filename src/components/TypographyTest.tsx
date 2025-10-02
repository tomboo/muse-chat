import React from "react";

const TypographyTest: React.FC = () => {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
      <article className="prose lg:prose-xl dark:prose-invert">
        <h1>Typography Test</h1>
        <p>
          This paragraph demonstrates the <code>@tailwindcss/typography</code>{" "}
          plugin with <strong>dark mode</strong> support.
        </p>
        <h2>Example List</h2>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
        <blockquote>
          “Dark Mode is just inverted light mode — but prettier.” — Anonymous
        </blockquote>
      </article>
    </div>
  );
};

export default TypographyTest;
