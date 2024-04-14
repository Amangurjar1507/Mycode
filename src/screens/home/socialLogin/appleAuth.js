import {appleAuth} from '@invertase/react-native-apple-authentication';


const appleLogin = async () => {
    /* Apple login **/
    try {
      const appleAuthReq = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      onSocialLogin(
        appleAuthReq?.user,
        'apple',
        appleAuthReq?.fullName?.givenName +
          ' ' +
          appleAuthReq?.fullName?.familyName,
        appleAuthReq?.email,
      );
    } catch (error: any) {
      if (appleAuth.Error.CANCELED === error.code) {
        Log({
          logLable: 'apple-error-CANCELED',
          logValue: JSON.stringify(error),
        });
      } else if (appleAuth.Error.FAILED === error.code) {
        Log({
          logLable: 'apple-error-FAILED',
          logValue: JSON.stringify(error),
        });
      } else if (appleAuth.Error.NOT_HANDLED === error.code) {
        Log({
          logLable: 'apple-error-NOT_HANDLED',
          logValue: JSON.stringify(error),
        });
      } else {
        Log({
          logLable: 'APPLE_ERROR :',
          logValue: JSON.stringify(error),
        });
      }
    }
  };
