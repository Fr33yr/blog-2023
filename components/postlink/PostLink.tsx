import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
};

function PostLink(props: Props) {
  const { id, title, description, date } = props;
  const url = `/blog/${id}`;

  return (
    <div className="w-96 flex p-4 rounded-sm hover:shadow-2xl ">
      <Link href={url}>
        <h3>Post title</h3>
        <div className="">{date}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
          dignissimos aliquid alias, neque cupiditate ut quidem, quod vitae
          fugiat beatae ipsa.
        </p>
      </Link>
    </div>
  );
}

export default PostLink;
