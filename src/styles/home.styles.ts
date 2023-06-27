import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
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
    fontSize: 14,
    fontWeight: '600',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  strong: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1BA2FC',
  },
  quantity: {
    fontSize: 16,
    color: '#1BA2FC',
    fontWeight: 'bold',
    paddingVertical: 5,
    position: 'absolute',
    paddingHorizontal: 5,
  },
  button: {
    flex: 1,
    height: 30,
    width: 120,
    maxHeight: 30,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#1BA2FC',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  button_label: {
    color: '#fff',
    fontSize: 15,
  },
  footer: {
    height: 50,
    marginHorizontal: 16,
    marginVertical: 16,
  },
});

export default styles;
