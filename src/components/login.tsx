import React from 'react';

const Login = () => {
  const authContainer = 'container page';
  const signIn = 'col-md-6 offset-md-3 col-xs-12';
  const formControl = 'form-control form-control-lg';
  const button = 'btn btn-lg btn-primary pull-xs-right';

  return (
    <div className={'auth-page'}>
      <div className={authContainer}>
        <div className={'row'}>
          <div className={signIn}>
            <h1 className={'text-xs-center'}>Sign In</h1>
            <p className={'text-xs-center'}>
              <a>
                Need an account?
              </a>
            </p>

            <form>
              <fieldset>
                <fieldset className={'form-group'}>
                  <input className={formControl}
                         type={'email'}
                         placeholder={'Email'} />
                </fieldset>

            <fieldset className={'form-group'}>
              <input
                className={formControl}
                type={'password'}
                placeholder={'Password'} />
            </fieldset>

            <button className={button}
                    type={'submit'}>
              Sign in
            </button>
          </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;