import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">
        Register
      </h3>

      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />

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
        <input
          type="password"
          placeholder="confirm password"
          name="password2"
          className="auth__input"
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Register
        </button>

        <Link 
          to="/auth/login"
          className="link text-center mt-5"
        >
          Already registered?
        </Link>
      </form>
    </>
  )
}
