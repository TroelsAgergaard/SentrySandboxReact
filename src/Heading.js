/** @jsxImportSource @emotion/react */
import { jsx, css, useTheme } from "@emotion/react";

const Heading = (props) => {
  const theme = useTheme();

  const styles = css`
    .heading {
      font-size: 20px;
      color: ${theme.colors.primary};
      margin-bottom: 10px;
      &:hover {
        color: blue;
      }
    }
  `;

  return (
    <div css={styles}>
      <h2 className="heading">{props.text}</h2>
    </div>
  );
};

export default Heading;
