import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex items-center max-w-[70%]  h-[40%] gap-x-12  mt-10 border-b-2 border-slate-500 p-6">

                  <div className="w-[60%]">
                    <img src={item.image}  alt=""/>
                  </div>
                  <div className=" flex flex-col space-y-4">
                      <h1 className="text-xl font-semibold text-slate-700">
                      {item.title}</h1>
                      <h1 className="text-base font-medium text-slate-700">
                      {item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
                      <div className="flex justify-between">
                        <p className="text-green-600 font-bold">${item.price}</p>
                        <div className="l-2 hover:scale-150 transition 0.5s ease-in bg-red-300 p-2  rounded-2xl text-red-700"
                        onClick={removeFromCart}>
                        <MdDelete/>
                      </div>
                  </div>

                </div>


      </div>
  );
};

export default CartItem;
