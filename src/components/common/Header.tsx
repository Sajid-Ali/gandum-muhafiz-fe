import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();
  const {iconsViewStyle, navTitle, navRight} = styles;

  return (
    <View style={styles.backgroundColor}>
      <View style={[iconsViewStyle, {backgroundColor: '#00a0ff'}]}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" size={34} color={'#fff'} />
        </TouchableOpacity>
      </View>

      <View style={[iconsViewStyle, styles.backgroundColor]}>
        <TouchableOpacity
          style={styles.opecityStyle}
          hitSlop={styles.hitSlop}
        />
        <View style={navTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={navRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {backgroundColor: '#00a0ff'},
  opecityStyle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  hitSlop: {top: 5, bottom: 5, right: 5, left: 5},
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
  },
  iconsViewStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '500',
  },
  navTitle: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  navRight: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  iconStyle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Header;
