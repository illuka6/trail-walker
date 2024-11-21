import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from "./DeleteItem";

function TrailItem_v0() {
  const dispatch = useDispatch();

  const isInList = useSelector(
    (id) => (state) => state.id.find((item) => item.id) === TRAILID,
  );

  function handleAddToList() {
    const newTrail = {
      id: TRAILID,
      name: TR_CNAME,
      position: TR_POSITION,
      location: TR_ENTRANCE,
    };
    // console.log("id", id);
    // dispatch(addTrail(newTrail));
  }
  //   const isInList =  > 0;

  return (
    <li className="flex gap-4 py-2">
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        {/* <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p> */}
        <div className="mt-auto flex items-center justify-between">
          {isInList && (
            <div className="flex items-center gap-3 sm:gap-8">
              {/* <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              /> */}
              <DeleteItem trailId={id} />
            </div>
          )}

          {!isInList && (
            <Button type="small" onClick={handleAddToList}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default TrailItem_v0;
