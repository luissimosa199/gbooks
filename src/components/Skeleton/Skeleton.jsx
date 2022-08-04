import "../Card/Card.style.css";
import "./Skeleton.style.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {

    const SkeletonUnit = () => {
        return (<div className='card_container skeleton_container'>
            <div className='card_img_container'>
                <Skeleton height='199px' />
            </div>
            <div className='skeleton-title'>
                <Skeleton height='1.5rem' count={.7} />
                <Skeleton height='1.5rem' count={.5} />
            </div>
            <div className='skeleton-text'>
                <Skeleton height='1rem' count={.8}/>
                <Skeleton height='1rem' count={.7}/>
            </div>
            <div className='skeleton-btns'>
                <Skeleton height='43.2px' inline />
                <Skeleton height='43.2px' inline />
            </div>
        </div>)
    }

  return (
    [...Array(10)].map((e, i) => <SkeletonUnit key={i}/>)
  );
};

export default SkeletonCard;
