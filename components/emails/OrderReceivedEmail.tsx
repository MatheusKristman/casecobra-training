import { ShippingAddress } from "@prisma/client";
import { Head, Html, Preview } from "@react-email/components";

export default function OrderReceivedEmail({ shippingAddress }: { shippingAddress: ShippingAddress }) {
  return (
    <Html>
      <Head />

      <Preview>Your order summary and estimated delivery date</Preview>
    </Html>
  );
}
