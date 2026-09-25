import { redirect } from "next/navigation";
type Props = { params: Promise<{ book: string }> };
export default async function LegacyBookRoute({ params }: Props) { const { book } = await params; redirect("/read/" + book.toLowerCase()); }
