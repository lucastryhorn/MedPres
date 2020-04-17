import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import SplashScreen from '../../pages/SplashScreen';
import { Creators as AuthActions } from '../../store/reducers/auth';
import Home from '../../pages/Home';

const Stack = createStackNavigator();

function AuthStack(props) {
  const { loadUserRequest } = props;
  const { loadingSplash, authenticated } = props.auth;

  useEffect(() => {
    loadUserRequest();
  }, []);

  if (loadingSplash) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator headerMode="none">
      {authenticated ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthStack);
