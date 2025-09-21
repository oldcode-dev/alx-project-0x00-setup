import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> =  ({title, styles}) => {
  return (
    <div>
      <h1 className={`${styles}`}>{title}</h1>
    </div>
  )
}
export default Button;