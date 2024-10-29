import { Divider, Stack, useMediaQuery, useTheme } from "@mui/material";
import SignInSide from "../../components/sign-in-side/SignInSide";
import Vault from "../../components/vault/Vault"
import Locker from "../../components/locker/Locker";
import backgroundImage from "../../images/background.png"
export default function Landing() {
    const theme = useTheme();
    const isMediumOrLarger = useMediaQuery(theme.breakpoints.up('md')); // Check if screen is medium or larger

    return <Stack
        direction="column"
        component="main"
        sx={[
            {
                justifyContent: 'center',
                marginTop: '0',
                minHeight: '100vh', // Ensure the container takes at least full viewport height
                position: 'relative', // Ensure ::before is positioned relative to this container
            },
            (theme) => ({
                '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute', // Ensure the background is positioned within the container
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0, // Stretch background to the full height of the container
                    backgroundSize: 'cover',

                    // backgroundImage: 'radial-gradient(at 50% 50%, rgba(32, 64, 128, 0.5), rgb(15, 15, 15))'
                    backgroundImage: `url(${backgroundImage})`



                },
            }),
        ]}
    >

        <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
                justifyContent: 'center',
                gap: { xs: 6, sm: 12 },
                p: 2,
                mx: 'auto',
            }}
        >
            <Stack
                direction={{ xs: 'column-reverse', md: 'row' }}
                sx={{
                    justifyContent: 'center',
                    gap: { xs: 6, sm: 12 },
                    p: { xs: 2, sm: 4 },
                    m: 'auto',
                }}
            >
                <Stack direction="column">
                    {isMediumOrLarger ? '' : <h2>Vaults</h2>}
                    <Vault sectionName="Vaults" />
                    {isMediumOrLarger ? <></> : <> <Divider sx={{ margin: '10px 0 10px 0', borderBottomWidth: 2, borderColor: 'primary.main' }} />
                        <h2>Locked Flax</h2></>}
                    <Locker sectionName="Locked Flax" />
                </Stack>
            </Stack>
        </Stack>
    </Stack >
}