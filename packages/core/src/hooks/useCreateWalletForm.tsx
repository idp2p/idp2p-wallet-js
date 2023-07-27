import { z } from "zod";
import { useTranslation } from "react-i18next";
import { zodResolver } from '@hookform/resolvers/zod';
import { get, useForm } from 'react-hook-form';
//import { useWallet } from './useWallet';
import { ReactNode } from "react";

export const createWalletSchema = z.object({
    //username: z.string().min(3),
    password: z.string().min(8).max(16),
    confirm_password: z.string().min(8).max(16)
});

type CreateWalletInput = z.infer<typeof createWalletSchema>;

export default function useCreateWalletForm() {
    //const { setWallet } = useWallet();
    const form = useForm<CreateWalletInput>({ mode: "onChange", resolver: zodResolver(createWalletSchema) });
    const { t } = useTranslation();
    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
    async function handleCreateWallet(input: CreateWalletInput) {
        await sleep(1000);

        console.log("input", input);
        //setWallet({ session: undefined })
    }
    const pwdInputProps: any = {
        type: "password",
        placeholder: t("Enter your password"),
        disabled: form.formState.isSubmitting,
        ...form.register("password")
    };
    pwdInputProps["aria-label"] = t("Confirm your password");
    if (form.formState?.isDirty) {
        pwdInputProps["aria-invalid"] = Boolean(form.formState?.errors.password)
    }

    const pwdInput = {
        props: pwdInputProps,
        label: t("Password")
    }

    const confirmPwdProps: any = {
        type: "password",
        placeholder: t("Confirm your password"),
        disabled: form.formState.isSubmitting,
        ...form.register("confirm_password")
    };
    confirmPwdProps["aria-label"] = t("Confirm your password");
    if (form.formState?.isDirty) {
        confirmPwdProps["aria-invalid"] = Boolean(form.formState?.errors.confirm_password)
    }
    const confirmPwdInput = {
        props: confirmPwdProps,
        label: t("Confirm Password")
    }

    const onSubmit = form.handleSubmit(handleCreateWallet);

    const ErrorMsg = ({ field, render }: { field: string, render: (message?: string) => ReactNode }) => {
        const err = get(form.formState?.errors, field);
        return <>{render(err?.message?.toString())}</>
    };

    const submitButton = {
        props: {
            type: "submit" as ("submit" | "button" | "reset" | undefined),
            disabled: !form.formState.isValid,
            "aria-busy": form.formState.isSubmitting
        },
        text: t("Create Wallet")
    };


    return {
        onSubmit,
        ErrorMsg,
        pwdInput,
        confirmPwdInput,
        submitButton,
        isValid: form.formState.isValid,
        isSubmitting: form.formState.isSubmitting
    };

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




