import { AppLoading,Asset,Font} from 'expo';
// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

import fonts from 'app/src/fonts';
import images from 'app/src/images';

// import AppNavigator from './navigation/AppNavigator';
// import { gunzip } from 'zlib';
// import { defaultProps } from 'recompose';

export default class App extends React.Component{
  static defaultProps = {
    skipLoadingScreen: false,
  }
  constructor(props){
    super(props);

    this.state = {
      isLoadingComplete: false,
    };
  }

  loadResourcesAsync = async () => {
    //ローカルフォルダから画像をロードします。
    await Asset.loadAsync(Object.keys(images).map(key => images[key]));
    await Font.loadAsync(fonts);
    return true;
  };

  render() {
    const {isLoadingComplete} = this.state;
    const {skipLoadingScreen} = this.props;
    //リソースロードが終わるまでAppLoadingをrenderします。
    if(!isLoadingComplete && skipLoadingScreen){
      return(
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={error => console.warn(error)}
          //リソースのロードが終わったらロードを終了します。
          onFinish={()=>this.setState({isLoadingComplete: ture})}
        />
      );
    }
    return (
      <View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Hello World</Text>
      </View>
    );
  }
}




// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = useState(false);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return (
//       <AppLoading
//         startAsync={loadResourcesAsync}
//         onError={handleLoadingError}
//         onFinish={() => handleFinishLoading(setLoadingComplete)}
//       />
//     );
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <AppNavigator />
//       </View>
//     );
//   }
// }

// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//       // remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     }),
//   ]);
// }

// function handleLoadingError(error: Error) {
//   // In this case, you might want to report the error to your error reporting
//   // service, for example Sentry
//   console.warn(error);
// }

// function handleFinishLoading(setLoadingComplete) {
//   setLoadingComplete(true);
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
