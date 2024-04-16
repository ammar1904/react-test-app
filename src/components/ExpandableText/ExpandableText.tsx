import { useState } from "react";

interface expandableTextProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ maxChars = 100, children }: expandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
  // <>
  //   <div>
  //     {isVisible ? (
  //       <>
  //         {children}
  //         <button onClick={handleLess}>Less</button>
  //       </>
  //     ) : (
  //       <>
  //         {children.slice(0, maxChars || 100)}
  //         {children.length > 100 && (
  //           <>
  //             ...<button onClick={handleMore}>More</button>
  //           </>
  //         )}
  //       </>
  //     )}
  //   </div>
  // </>
};

export default ExpandableText;
