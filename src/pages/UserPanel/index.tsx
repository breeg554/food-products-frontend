import { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { useAdmin } from "../../contexts/adminContext";
import { PaginationType } from "../../types";
import Loading from "../../components/shared/Loading";
import ErrorMessage from "../../components/shared/ErrorMessage";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TableHeader from "./TableHeader";
import UserTable from "./UserTable";
export interface UserPanelProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
        minHeight: "60vh",
      },
    },
  })
);

const UserPanel = () => {
  const classes = useStyles();
  const { getUsers, users } = useAdmin();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [paginationInfo, setPagination] = useState<PaginationType | null>(null);

  useEffect(() => {
    getUsers()
      .then((res: any) => {
        const { docs, ...rest } = res;
        console.log(res);
        setPagination(rest);
      })
      .catch((err) => {
        if (err && err.response) {
          setIsError(err.response.data.error.message);
          console.log(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message={"aaa"} />;
  return (
    <div className={classes.root}>
      <Paper elevation={6}>
        <TableHeader />
        <Divider />
        <UserTable data={users} paginationInfo={paginationInfo} />
      </Paper>
    </div>
  );
};

export default UserPanel;
