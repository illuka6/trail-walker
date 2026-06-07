import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./favTrailSlice";
function DeleteItem({ TRAILID }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        dispatch(deleteItem(TRAILID));
        console.log("TRAILID", TRAILID);
      }}
      c
    >
      移除收藏
    </Button>
  );
}

export default DeleteItem;
