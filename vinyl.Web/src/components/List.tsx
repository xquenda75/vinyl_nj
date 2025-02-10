type Props = {
  data: Album[];
};

interface Album {
  name: string;
}

function List({ data }: Props) {
  return (
    <div>
      List
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
