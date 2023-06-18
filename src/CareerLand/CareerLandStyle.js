import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      content: {
        paddingHorizontal: 20,
      },
    
        image:{
        flex: 1,
        resizeMode: 'cover', // or 'stretch' if you want the image to stretch to fill the screen
        position: 'absolute',
        width: '100%',
        height: '100%',
    }

});