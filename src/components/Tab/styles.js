import { styleSheet, Platform } from 'react-native';

const styles = styleSheet.create({
    icon: {
        marginBottom: -3,
    },
    takeTab: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    takeTabRounded: {
        width: 24,
        height: 24,
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 2,
        //デバイスによって場合分けをします。
        marginTop: Platform.OS === 'ios' ? 0 : 2,
    },
    takeTabIcon: {
        marginLeft: Platform.OS === 'ios' ? 1 : 0,
        marginTop: Platform.OS === 'ios' ? 1 : 0,
    }
});

export default styles;