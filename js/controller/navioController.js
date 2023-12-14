export async function getNavios() {
  const response = await fetch("http://localhost:8081/api/navios");
  return response.json();
}

export async function getNavio(id) {
  const response = await fetch(`http://localhost:8081/api/navios/${id}`);
  return response.json();
}

export async function buscarNavio(nome, bandeira, codNavio) {
  const response = await fetch(
    `http://localhost:8081/api/navios/findByFiltro?nome=${nome}&bandeira=${bandeira}&codNavio=${codNavio}`
    // `http://localhost:8081/api/navios/findByFiltro/Navio/brasil/123`
  );
  return response.json();
}
