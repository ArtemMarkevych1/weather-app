import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootStateModel } from "./index.reducer";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateModel,
    null,
    AnyAction
>;