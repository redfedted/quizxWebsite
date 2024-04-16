import { useRef } from "react";
import "../index.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function LoopItems({ items, baseVelocity }) {
  const arr = items;
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div>
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          {arr.map((e) => {
            return <span key={e}>{e}</span>;
          })}
        </motion.div>
      </div>
    </div>
  );
}

function Loop() {
  const items1 = [
    "Knowledge-Centric",
    "Connect the Dots",
    "Cross-Field Collaboration",
    "LLM-Powered Tools",
    "Modern-insights to Academics / Cutting-Edge to Academics",
    "Contextual Learning",
    "Knowledge-Centric",
    "Connect the Dots",
    "Cross-Field Collaboration",
    "LLM-Powered Tools",
    "Modern-insights to Academics / Cutting-Edge to Academics",
    "Contextual Learning",
  ];
  const items2 = [
    "Simple yet Interesting",
    "Learning Through Play",
    "Inspiring Ideas",
    "Curious by Design",
    "Selectively Gamified",
    "Collective Intelligence",
    "Beyond Syllabus",
    "Simple yet Interesting",
    "Learning Through Play",
    "Inspiring Ideas",
    "Curious by Design",
    "Selectively Gamified",
    "Collective Intelligence",
    "Beyond Syllabus",
  ];
  const items3 = [
    "Social Brainstorming",
    "Beyond Syllabus",
    "Creative Classrooms",
    "Imagining Possibilities",
    "Fun Meets Functionality",
    "Student-Machine Interface",
    "Lecture Synthesizer",
    "Social Brainstorming",
    "Beyond Syllabus",
    "Creative Classrooms",
    "Imagining Possibilities",
    "Fun Meets Functionality",
    "Student-Machine Interface",
    "Lecture Synthesizer",
  ];
  return (
    <section className="mb-[1.472rem] flex  flex-col gap-[0.5rem] bg-[#cf0804]  py-[1.125rem]">
      <LoopItems baseVelocity={1} items={items1}></LoopItems>
      <LoopItems baseVelocity={-1} items={items2}></LoopItems>
      <LoopItems baseVelocity={1} items={items3}></LoopItems>
    </section>
  );
}

export default Loop;
