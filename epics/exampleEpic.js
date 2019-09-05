import {filter, mapTo} from "rxjs/operators";
import {actionTypes} from "../actions/exampleActions";
import {EMPTY} from "rxjs";

export const exampleEpic = action$ =>
    action$.pipe(
        filter(action => action.type === actionTypes.TICK),
        mapTo(() => EMPTY),
    );