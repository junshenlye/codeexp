import AsyncStorage from '@react-native-async-storage/async-storage';

// This should ping our API if we had a backend
exports.getStats = async (name, fallback = 0) => {
    let value;
    try {
        value = await AsyncStorage.getItem(name);
    } catch (err) {
        /* */
    }

    if (value == null) {
        await AsyncStorage.setItem(name, JSON.stringify(fallback));
        value = fallback;
    } else {
        value = JSON.parse(value);
    }
    // console.log('get', name, value);
    return value;
};

exports.updateStats = async (name, data) => {
    await AsyncStorage.setItem(name, JSON.stringify(data));
};

exports.incrementStats = async (name) => {
    try {
        const count = await exports.getStats(name);

        if (typeof count != 'number') throw "Can't Increment a Non-Number";

        await exports.updateStats(name, count + 1);
        // console.log('inc', name, count + 1);
    } catch (err) {
        console.log(err);
    }
};
