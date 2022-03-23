import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  appBar: {
    flex: 0.2,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  turnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: '20%',
    left: '40%',
  },
  lanternsImage: {
    width: 50,
    height: '100%',
    resizeMode: 'contain',
  },
  buyButton: {
    width: 100,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bannerImage: {
    width: 350,
    height: 220,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 100,
    flexDirection: 'row',
  },
  moneyText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  buyImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  centerView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  envelopesView: {
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  b2Image: {
    position: 'absolute',
    top: '30%',
    left: '-5%',
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  b1Image: {
    position: 'absolute',
    top: '10%',
    left: '18%',
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  footerView: {
    flex: 0.3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  footerImage: {
    width: 400,
    height: 250,
    resizeMode: 'contain',
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  children: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    top: '10%',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
