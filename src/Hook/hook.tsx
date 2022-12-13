import { AppDispatch, RootState } from "../Store/store";
import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
