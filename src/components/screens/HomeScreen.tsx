import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import Header from '../common/Header';
import {TEST_USERS} from '../../utils/utils';
import styles from '../../styles/home.styles';
import Button from '../common/Button';

interface User {
  id: number;
  name: string;
  phoneNumber: string;
}

export const HomeScreen: React.FC = () => {
  const [users] = useState<Array<User>>(TEST_USERS);
  const navigation = useNavigation();

  const addNewUser = () => {
    navigation.navigate('AddUser');
  };

  const generateRandomNumber = () => {
    const randomDecimal = Math.random();
    return Math.floor(randomDecimal * 10) + 1;
  };

  const renderItem = ({item}: {item: User}) => {
    const handleEdit = () => {
      console.log('🚀 ~ ~ item:', item);
      // onEdit(item);
    };

    const handleDelete = () => {
      console.log('🚀 ~ ~ item:', item);
      // onDelete(item.id);
    };

    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>
            <Text style={styles.strong}>Name: </Text>
            {item.name}
            {'   '}
            <Text
              style={styles.quantity}>{`${generateRandomNumber()} Bags`}</Text>
          </Text>
          <Text style={styles.phoneNumber}>
            <Text style={styles.strong}>Phone: </Text>
            {item.phoneNumber}
          </Text>
          <Text style={styles.phoneNumber}>
            <Text style={styles.strong}>CNIC: </Text>
            {item.phoneNumber}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Grant Gandum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header title={'User List'} />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.footer}>
        <Button title="Add New User" onPress={addNewUser} />
      </View>
    </SafeAreaView>
  );
};
