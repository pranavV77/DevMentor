export default function ResourcePanel() {
  const resources = [
    { title: "MDN Web Docs", link: "https://developer.mozilla.org/" },
    { title: "FreeCodeCamp", link: "https://www.freecodecamp.org/" },
    { title: "JavaScript.info", link: "https://javascript.info/" },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Recommended Resources 📚</h2>
      <ul className="space-y-2">
        {resources.map((r, i) => (
          <li key={i}>
            <a href={r.link} target="_blank" className="text-blue-600 underline">
              {r.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
