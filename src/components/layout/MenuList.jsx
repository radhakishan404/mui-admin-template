import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { set_dark_mode } from "../../store/common/commonSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const MenuList = ({ modules, roles, navigate, path_url, theme }) => {
    const dispatch = useDispatch();
    return (
        <>
            <List>
                {modules.map((module, i) => {
                    let hasAccess = roles.find(obj => module.role.includes(obj.value));
                    if (!hasAccess) return false;
                    return (
                        <Tooltip
                            key={("module_", i)}
                            placement='right'
                            title={module.title}
                        >
                            <ListItemButton
                                button={"true"}
                                key={module.id}
                                onClick={() => navigate(module.link)}
                                selected={
                                    path_url === module.link
                                        ? true
                                        : false
                                }
                                sx={{
                                    mx: 2,
                                    my: 0.5,
                                    width: "unset",
                                    borderRadius: "10px",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: "35px",
                                        ...(path_url ===
                                            module.link && {
                                            color: "#0098FF",
                                        }),
                                        ...(theme.palette.mode === "dark" &&
                                            module.title === "Connections"
                                            ? { filter: "invert(1)" }
                                            : ""),
                                    }}
                                >
                                    {module.logo}
                                </ListItemIcon>
                                <ListItemText
                                    primary={module.title}
                                    sx={{
                                        ...(path_url ===
                                            module.link && {
                                            color: "#0098FF",
                                        }),
                                    }}
                                />
                            </ListItemButton>
                        </Tooltip>
                    );
                })}
            </List>
            <Divider />
            <List>
                <Tooltip placement='right' title='Dark Mode'>
                    <ListItemButton
                        button={"true"}
                        key={"Dark Mode"}
                        onClick={() => {
                            dispatch(set_dark_mode());
                            // window.location.reload();
                        }}
                        sx={{
                            mx: 2,
                            my: 0.5,
                            width: "unset",
                            borderRadius: "10px",
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            <Brightness4Icon />
                        </ListItemIcon>
                        <ListItemText primary={"Dark Mode"} />
                    </ListItemButton>
                </Tooltip>
            </List>
        </>
    )
}

export default MenuList;