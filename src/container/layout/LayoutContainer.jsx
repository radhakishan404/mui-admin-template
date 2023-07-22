import React from "react";

import BaseLayout from "../../components/layout/BaseLayout";
import AdminRoutes from "../../routes/AdminRoutes";
import HomeIcon from "@mui/icons-material/Home";
import SourceIcon from '@mui/icons-material/Source';
import GroupsIcon from '@mui/icons-material/Groups';
import EventNoteIcon from '@mui/icons-material/EventNote';
import UserIcon from '@mui/icons-material/Person2Outlined';
import { withTheme } from "@emotion/react";

class LayoutContainer extends React.Component {

    render() {

        return (
            <BaseLayout
                params={this.props.params}
                modules={adminModules}
                ChildComponent={AdminRoutes}
            />
        );
    }
}
export default withTheme(LayoutContainer);

const adminModules = [
    {
        id: "dashboard",
        title: "Dashboard",
        link: "/dashboard",
        role: ["SU", "L"],
        logo: <HomeIcon />,
    },
    {
        id: "user-manager",
        title: "User Manager",
        link: "/user-manager",
        logo: <UserIcon />,
        role: ["SU"]
    },
    {
        id: "recruiter",
        title: "Recruiter",
        link: "/recruiter",
        role: ["SU"],
        logo: <GroupsIcon />,
    },
    {
        id: "taf",
        title: "TAF",
        link: "/taf",
        role: ["SU"],
        logo: <SourceIcon />,
    },
    {
        id: "calendar",
        title: "Calendar Events",
        link: "/calendar",
        role: ["SU", "L"],
        logo: <EventNoteIcon />,
    },
];
