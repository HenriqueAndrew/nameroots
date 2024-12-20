const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROO_KEY });

export async function pesquisaNomes(pesquisaNome: string) {
  try {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
          {
            "role": "user",
            "content": "Estou fazendo um app onde o usuário entrará com um nome de pessoa, e quero responder as possíveis origem de criação do nome de forma resumida"
          },
          {
            "role": "assistant",
            "content": "Que ideia interessante!\n\nPara ajudar você a criar essa funcionalidade, eu posso fornecer algumas informações e dicas sobre as origens de criação de nomes de pessoas.\n\nFontes possíveis de origem de nomes\n\n1. Linguísticas:\n\t* Nomes de origem latina (ex: Julia, Marcus), grega (ex: Alexander, Sophia), hebraica (ex: David, Deborah), etc.\n\t* Nomes derivados de palavras em línguas como sânscrito, árabe, chinês, japonês, etc.\n2. Culturas e religiões:\n\t* Nomes inspirados em figuras bíblicas (ex: João, Maria), mitologia grega (ex: Apolo, Afrodite), etc.\n\t* Nomes utilizados por comunidades étnicas ou religiosas específicas (ex: Muhammad, Fatima).\n3. Lugares e geografia:\n\t* Nomes de lugares ou regiões (ex: Londres, Paris, Dakota), rios (ex: Jordan, Nile), montanhas (ex: Sierra), etc.\n4. Pessoas históricas ou famosas:\n\t* Nomes inspirados em personalidades históricas (ex: Leonardo, Cleópatra), científicos (ex: Newton, Curie), artistas (ex: Leonardo da Vinci, Michelangelo), etc.\n5. Família e ancestrais:\n\t* Nomes que homenageiam ancestrais ou familiares (ex: filho/neta de, ex: Pedro Filho, Maria Ana).\n\nDicas para criar a funcionalidade\n\n1. Criar uma base de dados: Armazene informações sobre os nomes, suas origens e significados. Você pode utilizar fontes como dicionários, sites de referência e bases de dados sobre nomes.\n2. Análise de string: Desenvolva um algoritmo para analisar a entrada do usuário e tentar encontrar semelhanças com nomes em sua base de dados.\n3. Pesquisa de patterns: Busque padrões em nomes que podem indicar sua origem (ex: prefixos, sufixos, sons específicos).\n4. Priorizar resultados: Organize os resultados com base na probabilidade de origem do nome, para que o usuário receba as informações mais relevantes.\n5. Considerar a complexidade: Lembre-se de que nomes podem ter múltiplas origens e significados. Você pode precisar de uma abordagem mais complexa para lidar com essas situações.\n\nExemplo de output\n\nPara o nome \"Julia\", o aplicativo pode retornar:\n\" Origem: Latina, significando 'Jovem' ou 'Júpiter'.\"\n\nPara o nome \"Muhammad\", o aplicativo pode retornar:\n\" Origem: Árabe, significando 'Louvado' ou 'Praised'.\"\n\nLembre-se de que a precisão dos resultados dependerá da qualidade da sua base de dados e algoritmo de análise.\n\nEspero que essas dicas tenham ajudado! Se tiver mais alguma dúvida ou precisar de mais ajuda, sinta-se à vontade para perguntar."
          },
          {
            "role": "user",
            "content": "quero te enviar um nome de pessoa, esse nome poderá ser composto e você irá me responder a origem e o significado."
          },
          {
            "role": "assistant",
            "content": "Que legal!\n\n Por favor, envie o nome de pessoa que gostaria de saber mais sobre. Eu farei o meu melhor para fornecer informações sobre a origem e significado do nome.\n\n(Lembre-se de que a precisão dos resultados depende da minha base de conhecimento e algoritmo de análise. Se eu não tiver informações suficientes sobre o nome, posso não ser capaz de fornecer uma resposta precisa.)\n\n Envie o nome!"
          },
          {
            "role": "user",
            "content": "Lívia"
          },
          {
            "role": "assistant",
            "content": "Lívia\n\nOrigem: Latina\n\nSignificado: Derivado do latim \"Livia\", que significa \"azul\" ou \"castanho-claro\". No Império Romano, Lívia foi o nome da esposa de Otaviano Augusto, o primeiro imperador romano.\n\nVariedades: Livia, Livie, Livy, Lyvia, Lyvie\n\nInformações adicionais: O nome Lívia é comum em países lusófonos, como Portugal e Brasil, e também é encontrado em outros países europeus, como Itália e Espanha.\n\nInteressante: A Imperatriz Lívia, esposa de Otaviano Augusto, foi uma figura importante na história romana, conhecida por sua beleza e inteligência. Ela era conhecida por sua habilidade política e sua influência sobre o marido.\n\nEssas são as informações que eu consegui encontrar sobre o nome Lívia! Se tiver mais alguma pergunta ou quiser saber sobre outro nome, sinta-se à vontade para perguntar."
          },
          {
            "role": "user",
            "content": "gostei da resposta, me retornar sempre neste modelo: \nParágrafos com a origem, significado, variedades, informações adicionais e interessante. O último parágrafo com os dizeres \"Essas são as informações...\" não precisa.\n\nRetorne novamente, agora com o nome Henrique já no modelo ajustado\n"
          },
          {
            "role": "assistant",
            "content": "Henrique\n\nOrigem: Germânica\n\nSignificado: Derivado do nome germânico \"Heinrich\", que significa \"senhor da casa\" ou \"dono da casa\". O nome é composto por \"heim\" (casa) e \"ric\" (senhor ou rei).\n\nVariedades: Enrique, Heinrich, Henri, Henry, Henrico\n\nInformações adicionais: O nome Henrique é comum em países de língua portuguesa e espanhola, e também é encontrado em países de língua inglesa e alemã. É um nome tradicionalmente associado à nobreza e à realeza.\n\nInteressante: O nome Henrique tem sido usado por vários monarcas e nobres ao longo da história, incluindo seis reis de Portugal e vários imperadores germânicos. O nome também é associado à figura de Henrique, o Navegador, um infante português que desempenhou um papel importante na Era dos Descobrimentos."
          },
          {
            "role": "user",
            "content": pesquisaNome
          },
        ],        
        "model": "llama-3.1-70b-versatile",
        "temperature": 1,
        "max_tokens": 350,
      });

      //for await (const chunk of chatCompletion) {
        //process.stdout.write(chunk.choices[0]?.delta?.content || '');
      //}    
      return chatCompletion.choices[0]?.message?.content;

  } catch (error) {
    return "Servidor indisponível. Volte mais tarde..."    
  }
}
  

