import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();
  const {iconsViewStyle, navTitle} = styles;

  return (
    <View style={styles.backgroundColor}>
      <View style={iconsViewStyle}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" size={34} color={'#fff'} />
        </TouchableOpacity>
      </View>

      <View style={iconsViewStyle}>
        <TouchableOpacity style={styles.opecityStyle} />
        <View style={navTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#00a0ff',
  },
  opecityStyle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
  },
  iconsViewStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '500',
  },
  navTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  iconStyle: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

export default Header;
