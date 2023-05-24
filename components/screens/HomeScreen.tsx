import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Header from '../common/Header';
import {TEST_USERS} from '../../utils/utils';

interface User {
  id: number;
  name: string;
  phoneNumber: string;
}

interface HomeScreenProps {
  users: User[];
  navigation: any;
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  users = TEST_USERS,
  onEdit,
  onDelete,
  navigation,
}) => {
  const renderItem = ({item}: {item: User}) => {
    const handleEdit = () => {
      onEdit(item);
    };

    const handleDelete = () => {
      onDelete(item.id);
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userInfo: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    backgroundColor: '#1BA2FC',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
