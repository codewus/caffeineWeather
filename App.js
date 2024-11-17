import { View } from 'react-native';

export default function App() {
  return (
    // web의 디폴트는 row, App의 디폴트는 column -> style={{ flexDirection: "row" }}
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 3, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
        <View style={{ flex: 3, backgroundColor: "teal" }}></View>
        <View style={{ flex: 1, backgroundColor: "orange" }}></View>
      </View>
    </View>
  );
}
