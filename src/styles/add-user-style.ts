import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  login_header: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginHorizontal: 8,
  },
  login_header_logo: {
    width: '95%',
    height: '90%',
    borderRadius: 16,
    resizeMode: 'contain',
  },
  login_header_text: {
    marginTop: 15,
    color: '#000000',
    fontSize: 16,
  },
  login_header_text_bold: {
    color: '#000000',
    fontWeight: 'bold',
  },
  login_wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 24,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    marginTop: -10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    marginHorizontal: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  form_input: {
    height: 44,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#EDF0F7',
    borderRadius: 50,
  },
  button: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    backgroundColor: '#1BA2FC',
    shadowColor: '#1BA2FC',
  },
  button_label: {
    color: '#fff',
    fontSize: 15,
  },
  login_social: {
    width: '100%',
    maxWidth: 280,
    marginTop: 20,
  },
  login_social_separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login_social_separator_line: {
    flex: 1,
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  login_social_separator_text: {
    marginHorizontal: 10,
    color: '#808080',
    fontSize: 16,
  },
  login_social_buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  login_social_button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 60,
  },
  login_social_icon: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  login_social_facebook: {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
  },
  login_footer_text: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#808080',
    fontSize: 15,
  },
  login_footer_link: {
    color: '#208AEC',
    fontSize: 15,
    fontWeight: 'bold',
  },
  photoAndVideoCamera: {
    height: '50%',
    borderRadius: 15,
  },
  camera: {
    height: '25%',
    width: '100%',
    alignSelf: 'center',
  },
});

export default style;
