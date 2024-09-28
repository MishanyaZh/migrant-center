export default function Page({ params }: { params: { slug: string } }) {
  return <p>info dynamic contact Page: {params.slug}</p>;
}
