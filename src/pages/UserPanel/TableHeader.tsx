import Box from "@material-ui/core/Box";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
export interface TableHeaderProps {}

const TableHeader = () => {
  return (
    <Box component="header" display="flex" alignItems="center" p={1}>
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        fullWidth
        placeholder="Wyszukaj użytkownika"
        inputProps={{ "aria-label": "user search" }}
      />
      <Button color="secondary" variant="contained">
        Dodaj
      </Button>
    </Box>
  );
};

export default TableHeader;
