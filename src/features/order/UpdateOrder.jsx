import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

// This UI is responsibled for updating the order
// from not priority to priority state
// when and only when the user has not set it when they first
// order the pizzas
const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  console.log(order);

  return (
    <fetcher.Form method={"PATCH"} className="text-right">
      <Button type={"primary"}>Make Priority</Button>;
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ request, params }) {
  const dataForUpdate = { priority: true };
  await updateOrder(params.orderId, dataForUpdate);
  return null;
}
