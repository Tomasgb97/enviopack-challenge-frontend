import { ButtonHTMLAttributes } from 'react';
type ButtonProps = {
  text: string;
  variant: 'Add' | 'Check';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, text, onClick }: ButtonProps) => {
  const styles = {
    Add: 'bg-black hover:bg-gray-900',
    Check: 'bg-green-500 hover:bg-green-300',
  };

  return (
    <button
      className={`w-full ${styles[variant]} text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
