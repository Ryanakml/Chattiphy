import { LinkTo } from "./styles";

type Props = {
  padding: string;
  href?: string;
  label?: string;
};

const GetStartedButton = ({
  padding,
  href = "/signup",
  label = "Get Started",
}: Props) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={href}
    >
      {label}
    </LinkTo>
  );
};

export default GetStartedButton;
