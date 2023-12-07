export async function getTemplates() {
  const response = await fetch("http://localhost:8081/api/templates");
  return response.json();
}