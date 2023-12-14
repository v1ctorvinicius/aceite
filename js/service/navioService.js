import { buscarNavio, getNavios } from "../controller/navioController.js";

export function cadastrarPedido(){
  console.log("Funcionalidade ainda não implementada");
}

export async function searchNavios(nome, bandeira, codNavio, container){
  return await buscarNavio(nome, bandeira, codNavio);
}