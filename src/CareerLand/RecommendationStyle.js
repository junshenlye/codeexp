import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '4%',
  },
  headerContainer: {
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    paddingVertical:20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20,
    // textDecorationLine: 'underline',
  },
  coursecontainer:{
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  keypointer:{
    padding: 'left',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  bullet: {
    fontSize: 18,
    lineHeight: 24,
    marginRight: 5,
  },
  text2: {
    fontSize: 18,
    lineHeight: 24,
  },
  tabText: {
    marginLeft: 10,
  },
  recommendation:{
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  recommendationcontainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default styles;
