import { redirect } from "next/navigation";
type Props = { params: Promise<{ book: string; chapter: string }> };
export default async function LegacyChapterRoute({ params }: Props) { const { book, chapter } = await params; redirect("/read/" + book.toLowerCase() + "/" + chapter); }
