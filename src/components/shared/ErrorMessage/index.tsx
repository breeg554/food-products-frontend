import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
export interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Box textAlign="center">
      <Typography color="error">{message}</Typography>
    </Box>
  );
};

export default ErrorMessage;
