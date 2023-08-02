import { z } from "zod";
import { useTranslation } from "react-i18next";
import { zodResolver } from '@hookform/resolvers/zod';
import { get, useForm } from 'react-hook-form';
//import { useWallet } from './useWallet';
import { ReactNode } from "react";

export const createWalletSchema = z.object({
    password: z.string().min(8).max(16),
    confirm_password: z.string()
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"]
});

type CreateWalletInput = z.infer<typeof createWalletSchema>;

export default function useCreateWalletForm() {
    //const { setWallet } = useWallet();
    const form = useForm<CreateWalletInput>({ mode: "onChange", resolver: zodResolver(createWalletSchema) });
    const { t } = useTranslation();
    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
    //const passwordMatch = form.watch(z=> z.password === z.confirm_password);

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
        formState: form.formState
    };

}




