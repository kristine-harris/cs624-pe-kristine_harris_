import { StyleSheet } from 'react-native';

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  galleryContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    marginVertical: 10,
    paddingVertical: 10,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 4,
    marginLeft: 4,
    marginBottom: 10,
  },
});