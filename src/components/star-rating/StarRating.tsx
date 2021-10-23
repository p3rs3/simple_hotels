import { ActiveStar, InactiveStar, StarsWrapper } from "./style";

export const StarRating = ({count, to}: {count: number, to: number}) => {
    const stars: any[] = [];

    for (let i = 1; i <= to; i++) {
        if (i > count) {
            stars.push(<InactiveStar key={i} />)
            
            continue;
        }

        stars.push(<ActiveStar key={i} />);
    }

    return (
        <StarsWrapper>
            {stars.map((star: any) => {
                return star;
            })}
        </StarsWrapper>
    )
}