import React from 'react'; 
import { Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps  } from 'react-native-gesture-handler'; 

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps{
    title: string; 
    active?: boolean; 
}

//por padrão o active começa como false
export function EnviromentButton({title, active = false, ...rest}: EnviromentButtonProps){
    return(
        <RectButton
            style={[
                styles.container, 
                //se o active for verdadeiro add o containerActive
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text  style={[
                styles.text,
                active && styles.textActive
            ]}>
                { title }
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape, 
        width: 76, 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 12, 
        marginHorizontal: 5,
    }, 
    text:{
        color: colors.heading, 
        fontFamily: fonts.text
    },

    containerActive:{
        backgroundColor: colors.green_light, 
    }, 
    textActive:{
        fontFamily: fonts.heading, 
        color: colors.green_dark, 

    }

})