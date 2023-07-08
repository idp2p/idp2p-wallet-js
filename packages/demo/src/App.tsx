import { useCreateWalletForm, useWallet } from "@idp2p/wallet-react-core";
import { useFormContext } from "react-hook-form";

function App() {
  const { wallet } = useWallet();
  const { CreateWalletForm, PasswordInput, UsernameInput, SubmitButton } = useCreateWalletForm();
  const FormContent = () => {
    const formCtx = useFormContext();
    return (
      <>
        <div>
          <label>
            Username
          </label>
          <UsernameInput />
          <label>
            Password
          </label>
          <PasswordInput />
        </div>
        <div>
          <SubmitButton className="" />
        </div>
        {formCtx.formState?.errors && <>{formCtx.formState?.errors.password?.message}</>}
      </>);
  }
  if (wallet === null) {
    return (
      <CreateWalletForm>
        <FormContent />
      </CreateWalletForm>);
  }
  return (
    <>
      {JSON.stringify(wallet)}
    </>
  )
}

export default App


