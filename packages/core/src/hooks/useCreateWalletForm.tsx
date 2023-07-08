import { z } from "zod";
import { ReactNode, createContext, useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useWallet } from './useWallet';

export const createWalletSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(4).max(6)
});

type CreateWalletInput = z.infer<typeof createWalletSchema>;

interface CreateWalletContextType {
    loading: boolean
}
export const CreateWalletContext = createContext<CreateWalletContextType | null>(null);

export default function useCreateWalletForm() {
    const { setWallet } = useWallet();
    const CreateWalletForm = useMemo(() => ({ children }: { children: ReactNode }) => {
        const form = useForm<CreateWalletInput>({ resolver: zodResolver(createWalletSchema) });
        async function handleCreateWallet(input: CreateWalletInput) {
            console.log(input);
            setWallet({ session: undefined })
        }
        return (
            <FormProvider  {...form}>
                <CreateWalletContext.Provider value={{ loading: false }}>
                    <form onSubmit={form.handleSubmit(handleCreateWallet)}>
                        {children}
                    </form>
                </CreateWalletContext.Provider>
            </FormProvider>

        );
    }, []);
    const UsernameInput = useMemo(() => () => {
        const { register } = useFormContext()
        return (
            <input type="text" {...register("username")} />);
    }, []);
    const PasswordInput = useMemo(() => () => {
        const { register } = useFormContext()
        return (
            <input type="password" {...register("password")} />);
    }, []);
    const SubmitButton = useMemo(() => ({ className }: { className?: string }) => {
        return <button type="submit" className={className}>Submit</button>
    }, []);

    return { CreateWalletForm, UsernameInput, PasswordInput, SubmitButton };
}




/*async function handleCreateWallet(input: CreateWalletInput) {
    setWallet(null);
    console.log(input);
}

const usernameProps = {
    name: 'username',
    placeholder: "Enter your username"
};*/
