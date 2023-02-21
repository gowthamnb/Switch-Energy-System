export interface Provider {
    id: string | null | undefined;
    name: string | null | undefined;
    rate: number | null | undefined;
    isEnabled: string | null | undefined | boolean;
}