import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button, Alert } from 'react-native';

function Balloon(props) {
  return(
    <View>
      <Button title={"Balloon"} onPress={
        ()=>{props.up()}
      } />
    </View>
  )
}

export default class App extends React.Component {
  state = {
    count: 0,
    red: 0,
    green: 0,
    blue: 0
  }
  up = () => {
    this.setState({
      count: this.state.count+1,
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255),
    });
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{
          backgroundColor: `rgb(${this.state.red},
                                ${this.state.green},
                                ${this.state.blue}
                                )`
        }}>{this.state.count}</Text>
        <Balloon up={this.up} />
    </View>
    )
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/** you can render userdefined components */}
//       <Balloon />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
