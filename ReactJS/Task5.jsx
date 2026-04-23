function UserCard({ name, age, email }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

function Task5() {
  return (
    <div>
      <h2>User Cards</h2>
      <UserCard name="Khushi Kalra" age={21} email="khushi.kalra@example.com" />
      <UserCard name="Kanishq Verma" age={22} email="kanishq.verma@example.com" />
    </div>
  );
}