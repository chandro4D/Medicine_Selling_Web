import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();


    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: "success",
                    text: "LogIn successfully!",

                });

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    text: "Please Provide Correct Email And Password!",

                });

            })
    }
    const role = "user";
    //--------- Google Login-----------
    const handleGoogleLogin = e => {
        e.preventDefault();
        googleLogin()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role
                    
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                Swal.fire({
                    icon: "success",
                    text: "LogIn successfully!",

                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })


    }
    return (
        <div className="pt-16">
            <div className=" lg:w-[500px] sm:w-[350px] lg:h-[600px] sm:h-[500px] bg-lime-100  lg:ml-[500px]  mb-10 rounded-xl sm:ml-[0px]">
                <Helmet>
                    <title>HealthHaven | Login</title>
                </Helmet>

                <div className=" pt-12">
                    <h2 className="text-center text-2xl font-bold text-pink-400 mb-2">WELCOME TO HEALTH HAVEN</h2>
                    <p className="text-center text-xl font-semibold text-black">Login To Your Account By Entering<br /> Your Email and Password</p>
                </div>
                <form onSubmit={handleLogIn} className="pt-10 lg:pl-12 sm:pl-0">
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                        <input className="w-full h-full text-center rounded-lg" type="password" placeholder="Enter Your Password" required name="password" />
                    </div>

                    <br />

                    <div className=" lg:w-[400px] sm:w-[250px]  h-[50px] rounded-2xl">
                        <button className=" btn btn-outline btn-secondary w-full h-full text-white"> LOGIN</button>
                    </div>
                </form>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1450">
                    <h3 className="text-center text-2xl font-semibold text-yellow-600">Don`t Have An Account? <Link to={"/register"}><span className="text-lime-300" >Register</span></Link></h3>
                </div>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="divider divider-neutral text-xl font-medium ml-14 mr-14">
                        Continue With
                    </div>

                    <div className="flex  ml-[240px]   mt-6">
                        <div  >
                            <button onClick={handleGoogleLogin} className=" mr-8    text-center pt-1 "><FcGoogle className="w-10 h-10"></FcGoogle></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;