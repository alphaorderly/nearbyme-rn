import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <SafeAreaView className="flex-1">
                <View className="flex-1 justify-center items-center">
                    <Text className="text-2xl font-bold">Hello World</Text>
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
}

export default App;
