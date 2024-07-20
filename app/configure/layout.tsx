import { ReactNode } from "react";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Steps } from "@/components/Steps";

export default function UploadLayout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}
