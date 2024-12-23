const SignInButton = ({ icon, text }) => {
  return (
    <div className="w-[446px]  flex items-center justify-center gap-4 p-4 rounded-lg border-[1px]">
      <div className="size-6">
        {icon}
      </div>
      <p className="font-medium text-primary">{text}</p>
    </div>
  )
}

export default SignInButton