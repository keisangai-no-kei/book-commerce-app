import { getProviders } from "next-auth/react";
import Button from "../components/Button";

async function Login() {
  const providers = await getProviders().then((res) => {
    return res;
  });
  return (
    <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            アカウントにログイン
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <div key={provider.id} className="text-center">
                  <Button id={provider.id} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Login;
