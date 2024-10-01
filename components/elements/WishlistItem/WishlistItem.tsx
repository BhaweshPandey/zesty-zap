import { useState } from "react";
import { motion } from 'framer-motion';
import { IconHeart } from "@tabler/icons-react";

const WishlistItem = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    // Define animation variants
    const variants = {
      open: { scale: [1, 1.2, 1.1, 1] },
      closed: { scale: 1 },
    };
  
    // Handle click event
    const toggleAnimation = () => {
      setIsToggled(!isToggled);
    };
  
    return (
      <div>
        <motion.div
          animate={isToggled ? 'open' : 'closed'}
          variants={variants}
          transition={{ duration: 0.2 }}
          onClick={toggleAnimation}
          style={{
            cursor: 'pointer',
          }}
        >
          {isToggled ? <IconHeart fill="red" color="red" /> : <IconHeart color={'red'} />}
        </motion.div>
      </div>
    );
  };
  export default WishlistItem