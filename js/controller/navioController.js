export async function getNavios() {
  const response = await fetch("http://localhost:8081/api/navios");
  return response.json();
}

export async function getNavio(id) {
  const response = await fetch(`http://localhost:8081/api/navios/${id}`);
  return response.json();
}
