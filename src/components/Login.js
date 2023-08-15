import "./Login.css";
import Api from "../Api";

const Login = ({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();
        if(result){
            console.log('result react', result);
            onReceive(result.user)
        }else{
            alert("erro")
        }
    }
    return (
        <div className="login">
            <button onClick={handleFacebookLogin} className="">Logar com Facebook</button>
        </div>
    )
}

export default Login;