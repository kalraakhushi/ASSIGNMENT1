function Task2() {
  const now = new Date().toLocaleString();
  return (
    <div>
      <h2>Current Time and Date</h2>
      <p>{now}</p>
    </div>
  );
}