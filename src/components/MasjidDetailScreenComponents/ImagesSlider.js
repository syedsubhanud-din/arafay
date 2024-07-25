import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
// import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');
const images = [
  {
    id: 1,
    source: require('../../assets/images/Slide1.jpeg'),
  },
  {
    id: 2,
    source: require('../../assets/images/Slide2.jpeg'),
  },
  {
    id: 3,
    source: require('../../assets/images/Slide1.jpeg'),
  },
  {
    id: 4,
    source: require('../../assets/images/Slide2.jpeg'),
  },
  {
    id: 5,
    source: require('../../assets/images/Slide1.jpeg'),
  },
];

// const renderItem = ({item}) => {
//   return (
//     <View style={styles.imagesContainer}>
//       <Image source={item.source} style={styles.image} />
//     </View>
//   );
// };

const ImagesSlider = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      decelerationRate="normal"
      style={styles.scrollView}>
      <View style={styles.imagesContainer}>
        {images.map(image => (
          <Image source={image.source} key={image.id} style={styles.image} />
        ))}
      </View>
    </ScrollView>
    // <View>
    //   <Carousel
    //     data={images}
    //     renderItem={({item}) => (
    //       <View style={styles.imagesContainer}>
    //         <Image source={item.source} style={styles.image} />
    //       </View>
    //     )}
    //     sliderWidth={Dimensions.get('window').width}
    //     itemWidth={Dimensions.get('window').width - 20}
    //   />
    // </View>
  );
};

export default ImagesSlider;

const styles = StyleSheet.create({
  scrollView: {
    width,
    // height: 300,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: '',
    gap: 4,
    // marginRight: 20
    // marginTop: 20
    // paddingHorizontal: 10,
  },
  image: {
    width: 164,
    height: 256,
  },
});
