import { AppButton } from "@/components/ui/app-button";
import { TextInput, Stack, Divider, Textarea } from "@mantine/core";
import { useState } from "react";
import { useForm } from '@mantine/form';
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { UseFormInput } from "@mantine/form/lib/types";

type InputForm = {
    emails: string;


};

interface Props {
    onClick: () => void;
}

export default function InviteCoworkers(props: Props) {
    const { onClick } = props;
    const [parent, _] = useAutoAnimate()


    const form: any = useForm<InputForm>({
        initialValues: {
            emails: '',

        },
        validate: {
            emails: (value) => false,

        },
    });
    return (
        <Stack ref={parent}>

            <form onSubmit={form.onSubmit((values: InputForm) => onClick())}>
                <Stack>
                    <Divider my="sm" />
                    <Textarea
                        placeholder="email@example.com, email2@example.com..."
                        label="Email"
                        withAsterisk
                        {...form.getInputProps('emails')}
                    />

                    <AppButton h={50} variant="gradient" gradient={{ from: '#80808030', to: '#80808005', deg: 35 }} styles={(theme) => ({
                        root: {
                            boxShadow: 'inset 0 0 0.5px 1px #80808030, 0 0.3px 0.4px #80808040',

                        }
                    })} type="submit" >Invite co-workers</AppButton>
                </Stack>
            </form>

        </Stack>
    )
}
