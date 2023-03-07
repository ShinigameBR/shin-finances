import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'


const list = [
  {
    id: 1,
    label: "Boleto",
    value: "78,50",
    date: "03/03/2023",
    type: 0 //Saida
  },
  {
    id: 2,
    label: "Shopping",
    value: "322,00",
    date: "06/03/2023",
    type: 0 //Saida
  },
  {
    id: 3,
    label: "Pix",
    value: "50,00",
    date: "06/03/2023",
    type: 1 //Entrada
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header username="Expedito Hebert" />
      <Balance balance="15.000,00" expenses="-3.000,00" />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList style={styles.list} data={list} keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false} renderItem={({ item }) => <Movements data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
