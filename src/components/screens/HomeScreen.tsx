import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

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
    console.log('[][][][][]');
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
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
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
    <>
      <Header navigation={navigation} title={'User List'} />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.footer}>
        <Button title="Add New User" onPress={addNewUser} />
      </View>
    </>
  );
};
