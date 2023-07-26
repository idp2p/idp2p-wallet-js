import { z } from "zod";
import { useTranslation } from "react-i18next";
import { zodResolver } from '@hookform/resolvers/zod';
import {  useForm } from 'react-hook-form';
import { useWallet } from './useWallet';
import { ReactNode } from "react";

export const createWalletSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(4).max(6)
});

type CreateWalletInput = z.infer<typeof createWalletSchema>;

export default function useCreateWalletForm() {
    const { setWallet } = useWallet();
    const form = useForm<CreateWalletInput>({ resolver: zodResolver(createWalletSchema) });
    const { t } = useTranslation();
    async function handleCreateWallet(input: CreateWalletInput) {
        console.log(input);
        setWallet({ session: undefined })
    }
    const pwdProps = {
        inValid: Boolean(form.formState?.errors.password),
        type: "password",
        placeholder: t("Enter your password"),
        ...form.register("password")
    };
    const onSubmit = form.handleSubmit(handleCreateWallet);

    const PwdErrorMsg = ({ render }: { render: (message?: string) => ReactNode }) => {
        return <>{render(form.formState?.errors.password?.message)}</>
    };

    return { onSubmit, pwdProps, PwdErrorMsg };

    /*const usernameInputProps = {
        label: t("Username"),
        placeholder: t("Type your username")
    };
    const submitButtonProps = {
        text: t("Create"),
        tooltip: t("Create wallet")
    };
    const CreateWalletForm = useMemo(() => ({ children }: { children: ReactNode }) => {
        const form = useForm<CreateWalletInput>({ resolver: zodResolver(createWalletSchema) });
        async function handleCreateWallet(input: CreateWalletInput) {
            console.log(input);
            setWallet({ session: undefined })
        }
        return (
            <FormProvider  {...form}>
                <form onSubmit={form.handleSubmit(handleCreateWallet)}>
                    {children}
                </form>
            </FormProvider>

        );
    }, []);
    const UsernameInput = useMemo(() => () => {
        const { register } = useFormContext()
        return (
            <>
                <label>
                    Username
                </label>
                <input type="text" placeholder="Enter your username" {...register("username")} />
            </>);
    }, []);
    const PasswordInput = useMemo(() => () => {
        const { register } = useFormContext()
        return (<>
            <label>
                Password
            </label>
            <input type="password" placeholder="Enter your password" {...register("password")} />
        </>);
    }, []);

   
    const ConfirmPasswordInput = useMemo(() => () => {
        const { register } = useFormContext()
        return (<>
            <label>
                Password Confirm
            </label>
            <input type="password" placeholder="Enter your password" {...register("password")} />
        </>);
    }, []);

    const SubmitButton = useMemo(() => (props: SubmitButtonProps) => {
        let ref = useRef(null);
        let { buttonProps } = useButton(props, ref);
        return <button {...buttonProps} ref={ref} type="submit">{submitButtonProps.text}</button>
    }, []);
    
    return {
        CreateWalletForm,
        UsernameInput,
        PasswordInput,
        ConfirmPasswordInput,
        SubmitButton,
        usernameInputProps,
        submitButtonProps
    };*/
}




