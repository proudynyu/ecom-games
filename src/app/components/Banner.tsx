import NextImage from "next/image";
import NextLink, { LinkProps } from "next/link";

interface BannerProps extends LinkProps {
    bannerType: "full" | "half";
    src?: string;
}

function Placeholder({ bannerType }: Pick<BannerProps, "bannerType">) {
    const height = bannerType === "full" ? 800 : 150;
    return (
        <div className={`bg-slate-500 h-[${height}px] w-full rounded-[16px]`} />
    );
}

export function Banner({ bannerType, src = "", ...props }: BannerProps) {
    const height = bannerType === "full" ? 800 : 150;

    return (
        <>
            {src ? (
                <NextLink {...props}>
                    <NextImage src={src} alt="" width={1200} height={height} />
                </NextLink>
            ) : (
                <Placeholder bannerType={bannerType} />
            )}
        </>
    );
}
