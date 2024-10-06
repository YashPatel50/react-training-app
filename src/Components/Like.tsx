import { useState } from "react";
import { BiSolidHeart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";

interface LikeProps {
  onClick: () => void;
}
const Like = ({ onClick }: LikeProps) => {
  const [showLiked, setShowLiked] = useState(false);

  const toggle = () => {
    setShowLiked(!showLiked);
    onClick();
  };

  if (showLiked)
    return <BiSolidHeart color="#ff6b81" size={200} onClick={toggle} />;
  else return <BiHeart size={200} onClick={toggle} />;
};

export default Like;
