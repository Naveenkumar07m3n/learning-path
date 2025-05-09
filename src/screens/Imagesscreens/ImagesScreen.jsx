// import React from 'react';
// import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import Logo from '../../assets/svg1.svg'; // Make sure this is an actual .svg file

// const ImagesScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>My Local Image Gallery</Text>
//       <View style={styles.gallery}>
//         {/* PNG Image */}
//         <Image source={require('../../assets/myIImg.png')} style={styles.image} />

//         {/* JPG Image */}
//         <Image source={require('../../assets/myjpgimg.jpg')} style={styles.image} />

//         {/* Base64 Image */}
//         <Image
//           source={{
//             uri: 'data:image/jpeg;base64,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',
//           }}
//           style={styles.image}
//         />

//         {/* SVG Image */}
       
//           {/* <Logo style={styles.image} /> */}
     

//         {/* FastImage Example */}
//         <FastImage
//           style={styles.image}
//           source={require('../../assets/fxr9.gif')}
//           resizeMode={FastImage.resizeMode.contain}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 15,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   gallery: {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 120,
//     marginVertical: 10,
//     borderRadius: 10,
//   },
//   svgContainer: {
//     marginVertical: 10,
//   },
// });
        // <Image  source={{ uri: "data:image/jpeg;base64,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" }}style={styles.image}/>

// export default ImagesScreen;

import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
// import SvgUri from 'react-native-svg-uri';
import Logo from '../../assets/svg1.svg';
import Candy from '../../assets/svg2.svg';
import Circle from '../../assets/svg3.svg';
import { Images } from '../../assets/index.js';

const ImagesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Local Image Gallery</Text>
      <View style={styles.gallery}>
        <Image source={Images.headset} style={styles.image} />
        <Image source={Images.camera} style={styles.image} />
        {/* <Image source={require('../../assets/fxr9.gif')} style={styles.image} /> */}
        {/* <Image source={require('../../assets/24q5.gif')} style={styles.image} /> */}
        
          <FastImage
            source={Images.crackers}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            source={Images.catpng}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
          />
           {/* <SvgUri
            source={{ uri: 'https://example.com/image.svg' }}
            style={styles.image}
            /> */}
        {/* <Text style={styles.onefont}>Hiii</Text> */}
             <View style={styles.image}>
                <Logo width={150} height={150} />
           </View>
             <View style={styles.image}>
                <Candy width={150} height={150} />
           </View>
             <View style={styles.image}>
                <Circle width={150} height={150} />
           </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  onefont: {
    fontSize:50,
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    // fontFamily: "Roboto_Condensed-Light",
    // fontFamily: "Roboto"
    fontFamily: "Roboto_Condensed-ExtraBoldItalic"
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    flexWrap: 'wrap',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ImagesScreen;