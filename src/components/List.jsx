import ListItem from "./ListItem";

const List = (props) => {
  const { list } = props;
  console.log("list &" ,{list} )
  return (
    <>
      {list.map((listItem) => (
        <ListItem listItem={listItem} />
      ))}
    </>
  );
};

export default List;
