import NextImage from "next/image";
import NextLink, { LinkProps } from "next/link";

interface BannerProps extends LinkProps {
    src?: string;
}

function Placeholder() {
    return (
        <div className={`bg-slate-500 h-[150px] w-full rounded-[16px]`} />
    );
}

export function Banner({ src = "", ...props }: BannerProps) {
    return (
        <>
            {src ? (
                <NextLink {...props}>
                    <NextImage src={src} alt="" width={1200} height={150} />
                </NextLink>
            ) : (
                <Placeholder />
            )}
        </>
    );
}
