import Left from './Left';
import Right from './Right';

const Login = () => {
  return (
    <div className="flex">
      <div className="h-screen w-full hidden lg:block">
        <Left />
      </div>
      <div className="h-screen w-full">
        <Right />
      </div>
    </div>
  );
};

export default Login;
