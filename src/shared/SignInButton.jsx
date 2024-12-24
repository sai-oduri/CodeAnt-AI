import { Link } from 'react-router';

const SignInButton = ({ icon, text }) => {
  return (
    <Link to="/repositories">
      <div className="w-[346px] lg:w-[446px]  flex items-center justify-center gap-4 p-4 rounded-lg border-[1px]">
        <div className="size-6">{icon}</div>
        <p className="font-medium text-primary">{text}</p>
      </div>
    </Link>
  );
};

export default SignInButton;
