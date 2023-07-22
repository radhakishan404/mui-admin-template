const LogoSection = ({ theme }) => {
    return (
        <img
            style={{
                width: "100%",
            }}
            src={
                theme.palette.mode === "dark"
                    ? "/assets/images/logo_white.webp"
                    : "/assets/images/Eblogo.png"
            }
            alt='edubridgeindia_logo'
        />
    )
}

export default LogoSection;