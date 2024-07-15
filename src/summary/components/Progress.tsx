import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

type ProgressTypes = {
  value: number;
  rightToLeft: boolean;
  border: boolean;
};

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "rightToLeft" && prop !== "border",
})<{ rightToLeft: boolean; border: boolean }>(({ theme, rightToLeft, border }) => ({
  height: 10,
  borderRadius: border ? 0 : 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: border ? 0 : 5,
    backgroundColor: rightToLeft ? "red" : theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
  transform: rightToLeft ? "rotate(180deg)" : "none",
}));

const Progress = ({ value, rightToLeft, border }: ProgressTypes) => {

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        rightToLeft={rightToLeft}
        border={border}
        variant='determinate'
        value={value}
      />
    </Stack>
  )
};

export default Progress;
