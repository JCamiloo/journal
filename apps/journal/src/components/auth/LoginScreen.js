import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">
        Login
      </h3>

      <form>
        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Login
        </button>

        <div className="auth__social-networks">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img 
                className="google-icon" 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="google button"
              />
            </div>

            <p className="btn-text">
              <b>Sign in with Google</b>
            </p>
          </div>
        </div>

        <Link 
          to="/auth/register"
          className="link text-center"
        >
          Create new account
        </Link>
      </form>
    </>
  )
}
