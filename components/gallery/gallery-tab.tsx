import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
    image: ImageType
}

export  const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        {({ selected }) => (
            <div>
                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                    <Image
                     fill
                     src={image.url}
                     alt=""
                     className="object-cover object-center"
                    />
                    <span className={cn(
                        "aboslute inset-0 rounded-md ring-2 ring-offset-2",
                        selected ? "ring-black" : "ring-transparent"
                    )}/>
                </span>

            </div>
        )}
    </Tab>
    return (
        <div>
            Gallery Tab
        </div>
    )
}
