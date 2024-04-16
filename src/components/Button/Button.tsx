import styles from "./Button.module.css";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger" | "success";
  children: string;
  onClick: () => void;
}

const Button = ({ color, children, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
