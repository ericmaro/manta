import { AppButton } from "@/components/ui/app-button";

import { Icons } from "@/components/icons";
import { ThemeIcon } from "@mantine/core";
const GoogleIcon = Icons['google'];
export default function LoginWithGoogle() {

    return (
        <>
            <AppButton leftIcon={<ThemeIcon size="sm" color="transparent" sx={(theme) => ({
                color: 'white',

            })}>
                <GoogleIcon />
            </ThemeIcon>} h={50} color="brand" styles={(theme) => ({
                root: {
                    boxShadow: 'inset 0 0 0.5px 1px #80808030, 0 0.3px 0.4px #80808040',

                }
            })} >Continue with Google</AppButton>
        </>
    )
}