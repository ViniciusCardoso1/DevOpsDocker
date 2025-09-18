import { useEffect, useState } from "react";

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/members")
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Membros da Academia</h1>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Plano</th>
            <th>Início</th>
            <th>Ativo</th>
          </tr>
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.full_name}</td>
              <td>{m.plan}</td>
              <td>{new Date(m.start_date).toLocaleDateString()}</td>
              <td>{m.active ? "Sim" : "Não"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
