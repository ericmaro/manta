import { AppButton } from "@/components/ui/app-button";
import { TextInput, Checkbox, Group, Button, Stack, Divider } from "@mantine/core";
import { useState } from "react";
import { useForm } from '@mantine/form';
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function LoginWithEmail() {
    //visible form state
    const [visible, setVisible] = useState(false);
    const [parent, enableAnimations] = useAutoAnimate()


    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length > 5 ? null : 'Password should be at least 6 characters long'),
        },
    });
    return (
        <Stack ref={parent}>
            {
                visible ?
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <Stack>
                        <Divider my="sm" />
                            <TextInput
                                withAsterisk
                                color="brand"
                                label="Email"
                                placeholder="your@email.com"
                                {...form.getInputProps('email')}
                            />

                            <TextInput
                                withAsterisk
                                color="brand"
                                type="password"
                                label="Password"
                                placeholder="Your password"
                                {...form.getInputProps('password')}
                            />

                            <AppButton h={50} variant="gradient" gradient={{ from: '#80808030', to: '#80808005', deg: 35 }} styles={(theme) => ({
                                root: {
                                    boxShadow: 'inset 0 0 0.5px 1px #80808030, 0 0.3px 0.4px #80808040',

                                }
                            })} type="submit" >Continue with Email</AppButton>
                        </Stack>
                    </form>

                    :

                    <AppButton h={50} variant="gradient" gradient={{ from: '#80808030', to: '#80808005', deg: 35 }} styles={(theme) => ({
                        root: {
                            boxShadow: 'inset 0 0 0.5px 1px #80808030, 0 0.3px 0.4px #80808040',

                        }
                    })} onClick={() => setVisible(true)} >Continue with Email</AppButton>
            }
        </Stack>
    )
}
