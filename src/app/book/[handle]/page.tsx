import { BookingView } from "./view";

export default async function BookPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  return <BookingView handle={handle} />;
}
