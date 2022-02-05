import { styled } from "@mui/system";
import { Stack, Typography } from "@mui/material";

export const Message = (props: { text: string; owner: boolean }) => {
  const MessageComponent = styled(Stack)(({ theme }) => ({
    backgroundColor: props.owner
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    alignSelf: props.owner ? "end" : "start",
  }));

  return (
    <MessageComponent>
      <Typography>{props.text}</Typography>
    </MessageComponent>
  );
};
