import { RoundtableView } from "./view";

export default async function RoundtablePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <RoundtableView id={id} />;
}
