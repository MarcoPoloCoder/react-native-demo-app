/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import Provider from './source/other/storage/appContext';
import AuthenticatedApp from './source/navigation/authenticated_app';
import NavigationProvider from './source/navigation/navigation';
import ProviderDim from './source/other/appearance/dimensions'
import MyErrorBoundary from './source/other/helpers/MyErrorBoundary';
import appStyle from './source/other/appearance/appStyle';
import {ReduxProvider, PersistGate} from 'react-redux'
import reduxStore from './source/other/storage/store'
import persistor from './source/other/storage/root_reducer'
const App = () => {
  return (
    <SafeAreaView>
     		<ReduxProvider store={reduxStore}>
					<PersistGate loading={null} persistor={persistor}>
            <MyErrorBoundary> 
              <NavigationProvider>
                <Provider>
                  <ProviderDim>
                    <AuthenticatedApp />
                  </ProviderDim>
                </Provider>
              </NavigationProvider>
            </MyErrorBoundary>  
        </PersistGate>
      </ReduxProvider>
    </SafeAreaView>
  );
};
export default App;