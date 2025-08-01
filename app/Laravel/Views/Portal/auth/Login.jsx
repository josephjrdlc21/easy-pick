import AuthLayout from '../_layouts/AuthLayout';
import logo from '../_assets/avatars/avatar-1.png';

export default function Login () {
    return (
        <AuthLayout>
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                    <div className="login-brand">
                        <img src={logo} alt="logo" width="100" className="shadow rounded-circle" />
                    </div>
                    <div className="card card-primary">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form className="needs-validation">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="name" className="form-control" name="email" tabIndex={1} required autoFocus />
                                    <div className="invalid-feedback">Please fill in your email</div>
                                </div>
                                <div className="form-group">
                                    <div className="d-block">
                                        <label htmlFor="password" className="control-label">Password</label>
                                        <div className="float-right">
                                            <a href="#" className="text-small">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <input id="password" type="password" className="form-control" name="password" tabIndex={2} required />
                                    <div className="invalid-feedback">Please fill in your password</div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
                                        <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-5 text-muted text-center">
                        Don't have an account? 
                        <a href="#"> Create One</a>
                    </div>
                    <div className="simple-footer">
                        Copyright &copy; EASY PICK <script>2018</script>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}