export async function getTemplates() {
  const response = await fetch("http://localhost:8081/api/templates");
  return response.json();
}

export async function getTemplatesByNavio(id) {
  const response = await fetch(`http://localhost:8081/api/templates/navio/${id}`);
  return response.json();
}