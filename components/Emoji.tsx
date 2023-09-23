import Image, { ImageProps } from 'next/image';
import bullsEys from '../assets/bulls-eye.png';
import thumsUp from '../assets/thumb.png';

interface Props{
    rating:number;
}

const Emoji = ({rating}:Props) => {
    if (rating < 3) return null;

    const emojiMap:{[key:number]:ImageProps}={
        3:{src:bullsEys ,alt:"exceptional"},
        4:{src:thumsUp ,alt:"recommnded"},
    }
    
  return (
   <Image {...emojiMap[rating]} width={30}/>
  )
}

export default Emoji
