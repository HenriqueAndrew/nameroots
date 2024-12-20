import { pesquisaNomes } from "@/services/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView} from 'moti';

export default function Index() {
  const [pesquisa, setPesquisa] = useState("")
  const [resposta, setResposta] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const regex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  let ultimaPesquisa = "";


  const gerarResposta = async () => {
    if(pesquisa.trim().length < 2){
      alert("Digite pelo menos dois caracteres válidos para realizar a pesquisa")
      return;
    }

    if (!pesquisa || pesquisa.trim() === "") {
      alert("Por favor, digite um nome para pesquisar");
      return;
    }

    if (!regex.test(pesquisa)) {
      alert("O nome só pode conter letras e caracteres válidos, como espaços ou apóstrofos");
      return;
    }

    if (pesquisa.length > 50) {
      alert("O nome não pode exceder 50 caracteres");
      return;
    }

    if (pesquisa === ultimaPesquisa) {
      alert("Você já pesquisou esse nome. Tente outro!");
      return;
    }  

    setIsLoading(true);
    setPesquisa("");
    setResposta("");

    try {      
      const result = await pesquisaNomes(pesquisa);
      setResposta(result)
      ultimaPesquisa = pesquisa;      
    } catch (error){
      alert(error)
    }finally{
      setIsLoading(false);
    }    

  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>NameRoots</Text>
      <Text style={styles.subtitulo}>Um mergulho na história e essência dos nomes.</Text>
      <TextInput
      onChangeText={setPesquisa}
      value={pesquisa}
        style={styles.input}
        placeholder="Digite o nome que deseja pesquisar...">
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={gerarResposta}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Pesquisar"}</Text>
      </TouchableOpacity>

      { resposta &&
        <MotiView style= {styles.card}
        from={{opacity:0, translateY: 200}}
        animate={{opacity: 1, translateY: 0}}
        >
        <Text style={styles.cardTitle}>Veja o que a IA revelou sobre este nome:</Text>
        <Text style={styles.cartText}>{resposta}</Text>
      </MotiView>
      }
    </View>
  );
}
