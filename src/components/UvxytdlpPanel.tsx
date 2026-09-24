import { UvxYtdlpIcon } from "@/components/uvxytdlp-icon";
import { DockerIcon } from "@dev.icons/react";

export const UvxytdlpPanel = () => (
    <>
        <a href="https://github.com/ocodo/uvxytdlp/pkgs/container/uvxytdlp%2Fuvxytdlp-ui">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-row items-center justify-center gap-2">
                    <UvxYtdlpIcon size={150} />
                </div>
                <div className="text-[28pt] font-thin">uvxytlp</div>
                <div className="text-sm font-thin">Self hosted web UI for yt-dlp powered by uvx</div>
                    <DockerIcon />
            </div>
        </a>
    </>
)