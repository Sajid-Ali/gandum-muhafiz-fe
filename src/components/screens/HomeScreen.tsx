import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';

import Header from '../common/Header';
import styles from '../../styles/home.styles';
import Button from '../common/Button';
import {fetchAPI} from '../../services/ApiUtils';
import Loader from '../common/Loader';

interface User {
  id: number;
  CNIC: string;
  email: string;
  phone_number: string;
  name: string;
  members: number;
  quantity: number;
  area: string;
}

export const HomeScreen: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchUsers(): Promise<void> {
    try {
      setLoader(true);
      const response = await fetchAPI({
        payload: null,
        method: 'GET',
        route: 'users',
      });
      if (response?.users) {
        setUsers(response.users);
      }
      setLoader(false);
    } catch (error) {
      console.log('>>> ERROR LOGIN <<<:', error);
      Alert.alert('Failed to get user list.');
      setLoader(false);
    }
  }

  const addNewUser = () => {
    navigation.navigate('AddUser');
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
            <Text style={styles.quantity}>{`${item.quantity} Bags`}</Text>
          </Text>
          <Text style={styles.phoneNumber}>
            <Text style={styles.strong}>Phone: </Text>
            {item.phone_number || 'N/A'}
          </Text>
          <Text style={styles.phoneNumber}>
            <Text style={styles.strong}>CNIC: </Text>
            {item.CNIC}
          </Text>
        </View>
        <View style={styles.actions}>
          {/* <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Grant Gandum</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {loader && <Loader />}
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
