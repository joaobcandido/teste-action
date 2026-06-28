import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  // Entrada `quem-cumprimentar` definida no arquivo de metadados da ação
  const nomeParaCumprimentar = core.getInput("quem-cumprimentar");
  core.info(`Olá ${nomeParaCumprimentar}!`);

  // Obter a hora atual e defini-la como uma variável de saída
  const tempo = new Date().toTimeString();
  core.setOutput("tempo", tempo);

  // Obtenha o payload JSON do webhook para o evento que acionou o fluxo de trabalho
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`A carga útil do evento: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
