import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Header from '../common/Header';
import styles from '../../styles/retailers.styles';
import {fetchAPI} from '../../services/ApiUtils';
import Loader from '../common/Loader';

interface Retailer {
  id: number;
  CNIC: string;
  name: string;
  email: string;
  location: string;
  phone_number: string;
}

export const RetailersScreen: React.FC = () => {
  const [retailers, setRetailers] = useState<Array<Retailer>>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchRetailers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchRetailers(): Promise<void> {
    try {
      setLoader(true);
      const response = await fetchAPI({
        payload: null,
        method: 'GET',
        route: 'retailer',
      });
      if (response?.retailers) {
        setRetailers(response.retailers);
      }
      setLoader(false);
    } catch (error) {
      console.log('>>> ERROR LOGIN <<<:', error);
      Alert.alert('Failed to get retailer list.');
      setLoader(false);
    }
  }

  const renderItem = ({item}: {item: Retailer}) => {
    const handleEdit = () => {
      console.log('🚀 ~ ~ item:', item);
      // onEdit(item);
    };

    const handleDelete = () => {
      console.log('🚀 ~ ~ item:', item);
      // onDelete(item.id);
    };

    return (
      <View style={styles.container} key={item.id}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>
            <Text style={styles.strong}>Name: </Text>
            {item.name}
          </Text>
          <Text style={styles.phoneNumber}>
            <Text style={styles.strong}>Phone: </Text>
            {item.phone_number}
          </Text>
          <Text style={styles.phoneNumber}>
            <Text style={styles.strong}>Location/Ares: </Text>
            {item.location}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Request For Gandum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {loader && <Loader />}
      <Header title={'Retailer List'} />
      <FlatList
        data={retailers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};
