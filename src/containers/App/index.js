import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Buttons from './Buttons';
import { setShowShopping, decrementTurn } from './actions';

const key = 'App';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [isShowMoney, setShowMoney] = useState(false);
  const [time, setTime] = useState(1);
  const [numberPress, setNumberPress] = useState(
    Math.floor(Math.random() * 3) + 3,
  );
  const [moneyValue, setMoneyValue] = useState(
    Math.floor(Math.random() * 1010) + 10,
  );

  useEffect(() => {
    const same = () => {
      if (isShowMoney && time > 0) {
        setTime(time - 1);
      }
    };
    const same1 = () => {
      if (isShowMoney && time === 0) {
        dispatch(decrementTurn());
        setShowMoney(false);
      }
    };
    const time1 = setTimeout(same, 1000);
    const time2 = setTimeout(same1, 5000);
    return () => {
      clearTimeout(time1);
      clearTimeout(time2);
    };
  }, [time]);

  const onSetShowShopping = () => {
    dispatch(setShowShopping(true));
  };

  const onClickBackButton = () => {
    dispatch(setShowShopping(false));
  };

  const onClickEnvelopesButton = () => {
    if (turn > 0) {
      if (numberPress === 0) {
        setShowMoney(true);
        setNumberPress(Math.floor(Math.random() * 3) + 3);
        setMoneyValue(Math.floor(Math.random() * 1010) + 10);
        setTime(1);
      } else {
        setNumberPress(numberPress - 1);
      }
    } else {
      Alert.alert('Please buy more turn');
    }
  };

  return (
    <Layout turn={turn}>
      <View style={appStyle.appBar}>
        {isShowShopping ? (
          <TouchableOpacity
            onPress={onClickBackButton}
            onLongPress={onClickBackButton}
            style={appStyle.buyButton}>
            <Text style={appStyle.turnText}>Back</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onSetShowShopping}
            onLongPress={onSetShowShopping}
            style={appStyle.buyButton}>
            <Image style={appStyle.buyImage} source={images.home.buy} />
            <Text style={appStyle.turnText}>{turn}</Text>
          </TouchableOpacity>
        )}
        <Image style={appStyle.lanternsImage} source={images.home.lanterns} />
      </View>
      {isShowShopping ? (
        <Buttons />
      ) : (
        <View style={appStyle.centerView}>
          {isShowMoney ? (
            <ImageBackground
              source={images.home.popup}
              style={appStyle.bannerImage}>
              <Text style={appStyle.moneyText}>$ </Text>
              <Text style={appStyle.moneyText}>{moneyValue}</Text>
            </ImageBackground>
          ) : (
            <TouchableOpacity
              onPress={onClickEnvelopesButton}
              onLongPress={onClickEnvelopesButton}>
              <View style={appStyle.envelopesView}>
                <Image source={images.home.b2} style={appStyle.b2Image} />
              </View>
              <Image source={images.home.b1} style={appStyle.b1Image} />
            </TouchableOpacity>
          )}
        </View>
      )}
      <View style={appStyle.footerView}>
        <Image style={appStyle.footerImage} source={images.home.footer} />
      </View>
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
  isShowShopping: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(App);
