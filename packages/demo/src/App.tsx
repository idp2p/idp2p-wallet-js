import { useCreateWalletForm, useWallet } from "@idp2p/wallet-react-core";
import errorMsg from "./components/errorMsg";

function App() {
  const { wallet } = useWallet();
  const { onSubmit, pwdProps, PwdErrorMsg } = useCreateWalletForm();

  if (wallet === null) {
    return (
      <form onSubmit={onSubmit}>
        <input {...pwdProps} aria-invalid={pwdProps.inValid} />
        <PwdErrorMsg render={errorMsg} /> 
        <input type="submit" />
      </form>);
  }
  return (
    <>
      {JSON.stringify(wallet)}
    </>
  )
}

export default App


