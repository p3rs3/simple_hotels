import { AuthActionCreators } from "./auth/action-creators";
import { HotelsActionCreators } from "./hotels/action-creators";

export const allActionCreators = {
    ...HotelsActionCreators,
    ...AuthActionCreators
}