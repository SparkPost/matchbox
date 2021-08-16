export function table(): string;
export function headerCell({ theme }: {
    theme: any;
}): string;
export function sticky({ isScrolled, freezeFirstColumn }: {
    isScrolled: any;
    freezeFirstColumn: any;
}): string;
export function cell(): string;
export function row({ theme }: {
    theme: any;
}): string;
export function totalsRow({ theme }: {
    theme: any;
}): string;
export const verticalAlignment: import("styled-system").styleFn;
export const horizontalAlignment: import("styled-system").styleFn;
export function wrapper({ freezeFirstColumn }: {
    freezeFirstColumn: any;
}): string;
