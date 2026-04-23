function Task4() {
  const items = [
    { objectID: 1, title: "React Docs", url: "https://reactjs.org", author: "Facebook", num_comments: 50, points: 100 },
    { objectID: 2, title: "MDN Web Docs", url: "https://developer.mozilla.org", author: "Mozilla", num_comments: 70, points: 150 }
  ];

  return (
    <div>
      <h2>List of Items</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Author</th>
            <th>Comments</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.objectID}>
              <td>{item.title}</td>
              <td><a href={item.url} target="_blank" rel="noreferrer">{item.url}</a></td>
              <td>{item.author}</td>
              <td>{item.num_comments}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}