import { useDispatch, useSelector } from "react-redux";
import { itemaction } from "../../store/itemslice";
import { useEffect } from "react";
import { fetch_status_action } from "../../store/fetchslice";

const Fettch = () => {
  const fetchh = useSelector((store) => store.fettch);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchh.fetchdone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetch_status_action.currentlyfetching());
    fetch("http://localhost:8081/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetch_status_action.markedfetchdone());
        dispatch(fetch_status_action.fetchingfinish());

        dispatch(itemaction.Addinitialitem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchh]);
};
export default Fettch;
