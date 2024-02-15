import { useLoaderData, useParams } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface LoaderParams {
  blogId: string;
}

export async function loader({ params }: { params: LoaderParams }) {
  const { blogId } = params;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + blogId
  );
  const json = (await response.json()) as Post;

  const postNotFound = !json.id;

  if (postNotFound) {
    throw new Response("", {
      status: 404,
      statusText: "Blog Post Not Found",
    });
  }

  return { post: json };
}

export default function BlogPostPage() {
  const { post } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const { blogId } = useParams() as unknown as LoaderParams;

  return (
    <>
      <h1>Blog Post Page</h1>
      <p>BlogId: {blogId}</p>
      <pre>{JSON.stringify(post)}</pre>
    </>
  );
}
