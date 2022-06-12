const ListItem = (props) => {
    // console.log("in list item components", props);
    const { listItem } = props;
  console.log("list Item" , {listItem})
    return <li>{listItem.title}</li>;
  };
  
  export default ListItem;
  