import { SornTypeEnum } from "./enums"
import { SortButtonNav, SortButtonNavDown, SortButtonNavTop, SortButtonWrapper } from "./style"
import { SortRulesType } from "./types";

export const SortButton = ({name, sort}: {name: string, sort: SornTypeEnum}) => {
    const activeRules = {
        button: false,
        top: false,
        down: false,
    } as SortRulesType;

    switch (sort) {
        case SornTypeEnum.INACTIVE:
            activeRules.button = false;
            activeRules.top = false;
            activeRules.down = false;
            break;
        case SornTypeEnum.DOWN:
            activeRules.button = true;
            activeRules.top = false;
            activeRules.down = true;
            break;
        case SornTypeEnum.UP:
            activeRules.button = true;
            activeRules.top = true;
            activeRules.down = false;
            break;
    }

    return (
        <SortButtonWrapper isActive={activeRules.button} >
            <span>
                {name}
            </span>
            <SortButtonNav>
                <SortButtonNavTop isActive={activeRules.top} />
                <SortButtonNavDown isActive={activeRules.down} />
            </SortButtonNav>
        </SortButtonWrapper>
    )
}