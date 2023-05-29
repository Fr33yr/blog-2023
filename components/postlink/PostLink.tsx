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
        <h3>{title}</h3>
        <div className="">{date}</div>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default PostLink;
