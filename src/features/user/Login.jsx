import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1705498710905-5e5887e07e58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center">
      <div className="flex min-h-[calc(100vh-32px)] items-start justify-center pt-20">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;
