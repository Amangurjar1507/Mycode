import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import loginController from './login.controller';
import style from './login.style';

const Login: React.FC = () => {
  const {signupButton} = loginController();
  return (
    <View style={style.container}>
      <KeyboardAvoidingView
        style={style.keyboardContainer}
        behavior={Platform.OS == 'ios' ? 'height' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scrollView}>
          <Text style={style.signinText}>
            Welcome sign in to you account below
          </Text>

          <View style={style.signupView}>
            <Text style={style.signupAccount}>Don't have an account ? </Text>
            <TouchableOpacity onPress={signupButton}>
              <Text style={style.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <Text style={style.conditionText}>
            By Signing Up you agree to the following
            <Text
              style={style.termsText}
              // onPress={onTermsAndCondition}
              suppressHighlighting={true}>
              Terms & Conditions.
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
