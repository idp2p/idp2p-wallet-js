import { useCreateWalletForm, useWallet } from "@idp2p/wallet-react-core";
import errorMsg from "./components/errorMsg";

function App() {
  const { wallet } = useWallet();
  const f = useCreateWalletForm();

  if (wallet === null) {
    return (
      <form onSubmit={f.onSubmit} style={{minWidth: "480px"}}>
        <label htmlFor="password">{f.pwdInput.label}</label>
        <input {...f.pwdInput.props}/>
        <f.ErrorMsg field="password" render={errorMsg} /> 
        <label htmlFor="confirm_password">{f.confirmPwdInput.label}</label>
        <input {...f.confirmPwdInput.props}/>
        <f.ErrorMsg field="confirm_password" render={errorMsg} /> 
        <button {...f.submitButton.props}>{f.submitButton.text}</button>
      </form>);
  }
  return (
    <>
      {JSON.stringify(wallet)}
    </>
  )
}

export default App


