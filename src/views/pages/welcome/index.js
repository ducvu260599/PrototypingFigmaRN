import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'react-native-themed-styles';
import {svgs} from '../../../assets/images/svgs';
import {pngs} from '../../../assets/images/pngs';

import globalStyles from '../../../constants/globalStyles';
import ButtonCT from '../../components/buttonCT';
import IndicatorBottomCT from '../../components/indicatorBottomCT';
import themedStyles from './styles';

const Welcome = () => {
  const [styles, themed] = useTheme(themedStyles);
  const [glbStyles] = useTheme(globalStyles);
  const onLoginPressed = () => {};
  const onRegisterPressed = () => {};
  return (
    <View style={glbStyles.flx}>
      <View style={styles.containerImage}>
        <ImageBackground
          style={styles.imageBackground}
          source={pngs.background}>
          <SvgXml xml={svgs.icLogo} style={styles.imageLogo} />
          <Text style={{fontSize: 48}}>photo</Text>
        </ImageBackground>
      </View>

      <View style={styles.containerButton}>
        <ButtonCT
          style={styles.buttonLeft}
          type="OUTLINE"
          title="LOG IN"
          onPress={onLoginPressed}
        />
        <ButtonCT
          style={glbStyles.flx}
          title="REGISTER"
          onPress={onRegisterPressed}
        />
      </View>
      <IndicatorBottomCT />
    </View>
  );
};
export default Welcome;
