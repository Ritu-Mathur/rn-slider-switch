/* Switch Button Component class
 */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const getIcon = (type, active) => {
    let icn;
    switch (type) {
    case 'Open':
        icn = active
            ? require('./assets/slider/active/notstarted.png')
            : require('./assets/slider/inactive/notstarted.png');
        break;
    case 'In Progress':
        icn = active
            ? require('./assets/slider/active/inprogress.png')
            : require('./assets/slider/inactive/inprogress.png');
        break;
    case 'Complete':
        icn = active
            ? require('./assets/slider/active/complete.png')
            : require('./assets/slider/inactive/complete.png');
        break;
    }
    return icn;
};

const getText = (type, active) => {
    let text;
    switch (type) {
    case 'Open':
        text = active
            ? 'NO'
            : 'NO';
        break;
    case 'In Progress':
        text = active
            ? 'INVEST'
            : 'INVEST';
        break;
    case 'Complete':
        text = active
            ? 'YES'
            : 'YES';
        break;
    }
    return text;
};

const getTextColor = (type, active) => {
    let style = {};
    switch (type) {
    case 'Open':
        style = active
            ? {color: 'white'}
            : {color: '#D32F2F'};
        break;
    case 'In Progress':
        style = active
            ? {color: 'white'}
            : {color: '#948FB5'};
        break;
    case 'Complete':
        style = active
            ? {color: 'white'}
            : {color: '#0D942B'};
        break;
    }
    return style;
};

const Button = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
            >
                {/* <Image source={getIcon(props.type, props.active)} /> */}
                <Text style={[{fontSize: 14}, getTextColor(props.type, props.active)]}>{getText(props.type, props.active)}</Text>
            </TouchableOpacity>
        </View>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    active: PropTypes.bool,
    onPress: PropTypes.func
};

Button.defaultProps = {
    active: false
};

export default Button;
