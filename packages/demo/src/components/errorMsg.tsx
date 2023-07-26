import { ReactNode } from "react";

export default function errorMsg( message?: string ): ReactNode {
    return <p style={{ color: "red" }}>{message}</p>
}